import weRequest from '@/common/request.js'



export const LoginByWx = (params) => weRequest( '/getOpenId', params)
export const GetUserInfo = (params) => weRequest( '/getUserInfo', params)
