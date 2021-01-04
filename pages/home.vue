<template>
	<view class="home">
		<navbar status-bar fixed left-icon="back" title="首页" @click-left="back"></navbar>

		<view>
			<view class="home-box-list">
				<view>选择</view>
				<view>仓库</view>
				<view>add</view>
			</view>
		</view>
		<view class="home-box">
			<view>仓库概览</view>
			<view class="home-box-list">
				<view v-for="(i,i) in 4" class="home-box-list-item">
					<view class="number">110</view>
					<view>库存数量</view>
				</view>
			</view>
		</view>
		<view class="home-box">
			<view class="home-box-list" style="margin: 0 ;">
				<view></view>
				<view>今日销售数据</view>
				<view>嗯</view>
			</view>
			<view class="home-box-list">
				<view v-for="(i,i) in 9" class="home-box-list-item">
					<view class="number">110</view>
					<view>库存数量</view>
				</view>
			</view>
		</view>
		
		
		


	</view>
</template>

<script>
	import Navbar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				key: ''
			}
		},
		components: {
			Navbar
		}
	}
</script>

<style scoped lang="less">
	.home-box{
		border-radius: 6rpx;
		background-color: #eee;
		text-align: center;
		margin: 24rpx;
		padding: 24rpx 0;
		&-list{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: center;
			margin-top: 24rpx;
			&-item{
				height: 100rpx;
				flex: 0 0 20%;
				font-size: 26rpx;
				.number{
					font-weight: bold;
					font-size: 30rpx;
				}
			}
		}
	}
</style>
