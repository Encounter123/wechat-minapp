<template>
	<button open-type="getUserInfo" lang="zh_CN"  @getuserinfo="getuserinfo">登录</button>
</template>

<script>
	import { navigateTo, redirectTo, reLaunch, switchTab, navigateBack } from '@/common/navigation.js'
	import { showLoading, hideLoading, showToast, showModal} from '@/common/toast.js'
	import { LoginByWx, GetUserInfo } from '@/api/api.js'
	
	export default{
		data() {
			return {
				key: 'value'
			}
		},
		onLoad() {
			navigateTo('/pages/home')
			// uni.login({
			// 	provider: 'weixin',
			// 	success: function(res) {
			// 		console.log(res)
			// 		// 19bc545a393a25177083d4a748807cc0
			// 		// cadd61f6-67f1-48a1-b716-c5c3d5eba5ea
					
			// 		LoginByWx({
			// 			data: {
			// 				code:res.code,
			// 			}
			// 		}).then(res=>{
			// 			console.log(res)
			// 			uni.setStorageSync('sessionToken', res.data.UUID)
			// 		})
			// 	}
			// })
		},
		methods:{
			getuserinfo(e){
				console.log(e)
				GetUserInfo({
					data: e.detail.userInfo
				})
			}
		}
	}
</script>

<style>
</style>
