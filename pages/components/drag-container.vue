<template>
	<view class="list">
		<view class="item flex-row-between">
			吸附到两侧：
			 <switch :checked="sticky" @change="switchSticky" />
		</view>
		
		<view class="item flex-row-between">
			允许吸附到左侧：
			 <switch :checked="stickyLeft" @change="switchStickyLeft" />
		</view>
		
		<view class="item flex-row-between">
			禁止拖动：
			 <switch :checked="disabled" @change="switchDisabled" />
		</view>
		
		<view class="item flex-row-between">
			初始距离顶部位置：
			 <input type="text" placeholder="初始距离顶部位置" @input="changeStartTop"/>
		</view>

		
		<oh-drag-container :sticky="sticky" :disabled="disabled" :sticky-left="stickyLeft" :start-top="top">
			<view class="container" @click="clickContent">
				请拖拽
			</view>
		</oh-drag-container>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sticky: true,
				stickyLeft: true,
				disabled: false,
				top: '50%'
			}
		},
		methods: {
			switchSticky(e) {
				this.sticky = e.target.value
			},
			switchStickyLeft(e) {
				this.stickyLeft = e.target.value
			},
			switchDisabled(e) {
				this.disabled = e.target.value
			},
			clickContent() {
				uni.showToast({
					icon: 'none',
					title: '内容被点击'
				})
			},
			changeStartTop(e) {
				this.top = e.detail.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100rpx;
		height: 100rpx;
		background: rgba($color: #000000, $alpha: 0.5);
		border-radius: 50% 0 0 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
	}
</style>
