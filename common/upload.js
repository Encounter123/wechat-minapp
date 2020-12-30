import { baseURL } from '@/config.js'
import { hideLoading, showLoading, showModal, showToast } from '@/common/toast.js';

let client = {}

uni.request({
	url: baseURL + '/app/aliyun/oss/policy',
	method: 'get',
	success: (res) => {
		client = res.data
	}
})

export function uploadFile(imageSrc){
	return new Promise((resolve,reject)=>{
		let fileName = client.dir + new Date().getTime()
		uni.uploadFile({
			url: client.host,
			filePath: imageSrc,
			name:'file',
			formData:{
				name: imageSrc,
				key: fileName,
				policy: client.policy,
				OSSAccessKeyId: client.accessKeyId,
				success_action_status: '200',
				signature: client.signature
			},
			success: (res)=>{
				resolve(client.host + '/' + fileName)
				hideLoading()
			},
			fail: (errMsg)=>{
				hideLoading()
				showToast({title: '上传失败', icon: 'none'})
				reject()
			}
		})
	})
}

