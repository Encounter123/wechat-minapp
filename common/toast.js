/**
 * 提出来的原因是 怕后期会更改
 * @returns {*}
 */
export function showLoading (opt) {
	// return uni.showToast({
	// 	...opt,
	// 	duration:1000000,
	// 	image:'../../../static/images/loading.gif'
	// })
	
  return uni.showLoading({
		// mask: true,
		...opt
	})
}

export function hideLoading() {
  return uni.hideLoading()
}

export function showToast(opt) {
  return uni.showToast({
		mask: true,
		...opt
	})
}

export function showModal(opt) {
  return new Promise((res,rej)=>{
		 uni.showModal({...opt,success:function(result){
			 if (result.confirm) {
			 	res(result)
			 } else if (result.cancel) {
			 	rej(result)
			 }
			 
		 }})
	}) 
}
