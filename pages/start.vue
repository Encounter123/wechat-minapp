<template>
	<button open-type="getUserInfo" lang="zh_CN"  @getuserinfo="getuserinfo">登录</button>
</template>

<script>
	import { LoginByWx } from '@/api/api.js'
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
					})
				}
			})
		},
		methods:{
			getuserinfo(e){
				console.log(e)
				LoginByWx({
					data: e.detail
				})
			}
		}
	}
</script>

<style>
</style>
