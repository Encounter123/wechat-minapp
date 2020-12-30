import weRequest from '@/common/request.js'



export const LoginByWx = (params) => weRequest( '/getUserInfor', params)
