<style lang="less">
	.downAppPopupBox{
		position: relative;
		z-index: 5;
		.popup{
			width: 538rpx;
			height: 688rpx;
			background: #fff;
			padding: 30rpx;
			border-radius: 10rpx;
			text-align: center;
			&-imgBox{
				height: 420rpx;
				border-bottom: 1rpx dashed #979797;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				&-logo{
					height: 172rpx;
					width: 172rpx;
					border-radius: 50%;
				}
				&-title{
					font-size: 48rpx;
					color: #1A1A1A;
					font-weight: 600;
				}
				&-icon{
					height: 54rpx;
					width: 318rpx;
				}
			}
			&-note{
				color: #666666;
				font-size: 26rpx;
				text-align: center;
				margin: 40rpx auto 24rpx auto;
			}
			&-defaultBtn{
				background:#FFD502;
				height:88rpx;
				width:362rpx;
				border-radius:100rpx;
				color:#1A1A1A;
				font-size:32rpx;
				line-height:88rpx;
				text-align:center;
				border:none;
				outline:0;
				padding:0;
				font-weight: bold;
			}
			&-defaultBtn:after{
				outline:0;
				border:none;
			}
		}
	}
</style>

<template>
	<view>
		<uni-popup class="downAppPopupBox" ref="popup" type="center">
			<view class="popup">
				<view class="popup-imgBox">
					<image class="popup-imgBox-logo" src="../../static/logo.png" mode=""></image>
					<view class="popup-imgBox-title">啦啦啦</view>
					<image class="popup-imgBox-icon" src="../../static/loginIcon.png"></image>
				</view>
				<view class="popup-note">为继续使用，请您授权登录</view>
				
				<button class="popup-defaultBtn" hover-class="none" @getuserinfo="getUserInfo" open-type="getUserInfo">微信登录</button>
				
				
			</view>
		</uni-popup>	
	</view>
</template>

<script>
	import uniPopup from "../uni-popup/uni-popup.vue"
	import { GetUserInfo } from "@/api/api.js"
	import { showToast } from "@/common/toast.js"
	
	export default {
		components:{
			uniPopup
		},
		data() {
			return { };
		},
		methods:{
			open(){
				this.$refs.popup.open()
			},
			close(){
				this.$refs.popup.close()
			},
			getUserInfo(e){
				let status1 = e.detail.errMsg.indexOf('deny')
				let status2 = e.detail.errMsg.indexOf('fail')
				if (status1 == -1 && status2 == -1) {
					GetUserInfo({
						data: e.detail.userInfo
					}).then(res=>{
						if(res.data.nickName){
							uni.setStorageSync('user', JSON.stringify(res.data))
						}
						showToast({title:'登录成功！'})
						this.$emit('close')
					})
				}else{
					this.$emit('close')
					showToast({title:'登录失败，请重试',icon:'none'})
				}
			},
		}
	}
</script>

