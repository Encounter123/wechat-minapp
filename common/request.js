import { baseURL } from '@/config.js'
import { showToast } from '@/common/toast.js'
import { navigateTo, redirectTo, reLaunch, switchTab, navigateBack } from '@/common/navigation.js'


const weRequest = (url, params = {}) => {

  if (url && url.indexOf('http') === -1) {
    url = baseURL + url
  }


  let sendObj = {
    url,
    method: params.method || 'POST',
    data: params.data || {},
    responseType: params.responseType || 'text',
    header:{
      'token': uni.getStorageSync('sessionToken')||'',
			...params.header
    }
  }

  if (params.method && params.method.toUpperCase() === 'GET') {
    if (url.indexOf('?') === -1) {
      url += '?'
    }
    for (let key in params.data) {
      url += `${key}=${params.data[key]}&`
    }
    sendObj.url = url
  } else {
		// const extParams = {app:'weapp1.0',version:'1.5.0'}
		const extParams = {}
    sendObj.data = {...extParams,...params.data} || {...extParams}
  }


  return new Promise((resolve, reject) => {
		uni.request({...sendObj,
			success:function (res) {
				console.log(res)
				if(res.statusCode!=200){
					if (res.data.msg.indexOf('token')!=-1) {
						uni.clearStorage()
						showToast({
							title: '登录已过期，正在重新加载...',
							icon: 'none',
							duration:5000
						})
						setTimeout(()=>{
							reLaunch('/pages/start')
						},2000)
					} else{
						showToast({
							title: res.data.error||'网络异常!',
							icon: 'none',
							duration:5000
						})
						setTimeout(()=>{
							navigateBack()
						},1500)
						// navigateTo('/pages/start/404')
					}
				}else{
					if (res.data.msg.indexOf('token')!=-1) {
						uni.clearStorage()
						showToast({
							title: '登录已过期，正在重新加载...',
							icon: 'none',
							duration:5000
						})
						setTimeout(()=>{
							reLaunch('/pages/start')
						},2000)
					} else if (res.data.msg.indexOf('vip已经过期')!=-1) {
						showToast({
							title: 'vip已过期，正在重新加载...',
							icon: 'none',
							duration:5000
						})
						uni.setStorageSync('expired',true)
						setTimeout(()=>{
							reLaunch('/pages/other/becomeVip', {expired: true})
						},2000)
					} else {
						resolve(res.data)
					}
				}			
			},
			fail:function (error) {
				navigateTo('/pages/404')
			}
		})
	}) 
}

export default weRequest
