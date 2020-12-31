<template>
	<button open-type="getUserInfo" lang="zh_CN"  @getuserinfo="getuserinfo">登录</button>
</template>

<script>
	import { LoginByWx, GetUserInfo } from '@/api/api.js'
	export default{
		data() {
			return {
				key: 'value'
			}
		},
		onLoad() {
			uni.login({
				provider: 'weixin',
				success: function(res) {
					console.log(res)
					
					LoginByWx({
						data: {
							code:res.code,
						}
					}).then(res=>{
						console.log(res)
						uni.setStorageSync('sessionToken', res.data.UUID)
					})
				}
			})
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
