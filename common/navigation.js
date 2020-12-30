function parse(url,params) {
	let paramsArr = ''
	if (params) {
		for (let key in params) {
			paramsArr += '&'+key+'='+params[key]
		}
		return url+'?'+paramsArr.substring(1,paramsArr.length)
	} else{
		return url
	}
}

export function navigateTo (url,params) {
  return uni.navigateTo({
		url: parse(url,params)
	});
}

export function redirectTo (url,params) {
  return uni.redirectTo({
		url: parse(url,params)
	});
}

export function reLaunch (url,params) {
  return uni.reLaunch({
		url: parse(url,params)
	});
}

export function switchTab (url,params) {
  return uni.switchTab({
		url: parse(url,params)
	});
}

export function navigateBack (number) {
  return uni.navigateBack({
		delta: number||1
	});
}