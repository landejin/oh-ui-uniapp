<template>
	<view class="">
		<view class="list">
			<view class="item flex-row-between">
				禁用：
				<switch :checked="disabled" @change="switchDisabled" />
			</view>

			<view class="item flex-row-between">
				点击空白地方关闭菜单：
				<switch :checked="closeOnClickMask" @change="switchCloseOnClickMask" />
			</view>

			<view class="item flex-row-between">
				点击菜单后关闭菜单：
				<switch :checked="closeOnClickItem" @change="switchCloseOnClickItem" />
			</view>

			<view class="item flex-row-between">
				显示分割线：
				<switch :checked="divided" @change="switchDivided" />
			</view>

			<view class="item flex-row-between">
				下拉圆角：
				<input :value="radius" type="number" @input="changeRadius" placeholder="输入圆角值(rpx)"
					style="text-align: right;" />
			</view>

			<view class="item flex-row-between">
				菜单对齐方式：
				<view class="tag-list">
					<view class="tag" :class="{active : align === 'left'}" @click="align = 'left'">左对齐</view>
					<view class="tag" :class="{active : align === 'center'}" @click="align = 'center'">居中对齐</view>
					<view class="tag" :class="{active : align === 'right'}" @click="align = 'right'">右对齐</view>
				</view>
			</view>

			<view class="item flex-row-between">
				菜单最大宽度：
				<input :value="maxWidth" type="text" @input="changeWidth" placeholder="输入下拉菜单最大宽度"
					style="text-align: right;" />
			</view>
		</view>

		<view class="list">
			<view v-for="item in 20" :key="item" class="item">
				<view class="">
					屏幕上下部分的下拉方向不一样
				</view>
				
				<oh-drop-menu :title="disabled ? '禁用下拉' : '点击下拉'" :disabled="disabled" :closeOnClickMask="closeOnClickMask"
					:closeOnClickItem="closeOnClickItem" :radius="radius" :align="align" :max-width="maxWidth">
					<oh-drop-item v-for="(item,index) in 3" :key="item" @click="clickItem(index)" :divided="divided"
						:disabled="index === 2">
						下拉 {{index % 2 ? '(长文字)' : ''}}
					</oh-drop-item>
				</oh-drop-menu>
			</view>
		</view>

		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled: false,
				closeOnClickMask: true,
				closeOnClickItem: true,
				divided: false,
				radius: 12,
				align: 'center',
				maxWidth: ''
			}
		},
		methods: {
			clickItem(index) {
				uni.showToast({
					icon: 'none',
					title: `点击了菜单${index + 1}`
				})
			},
			switchDisabled(e) {
				this.disabled = e.target.value
			},
			switchCloseOnClickMask(e) {
				this.closeOnClickMask = e.target.value
			},
			switchCloseOnClickItem(e) {
				this.closeOnClickItem = e.target.value
			},
			switchDivided(e) {
				this.divided = e.target.value
			},
			changeRadius(e) {
				this.radius = parseInt(e.detail.value)
			},
			changeWidth(e) {
				this.maxWidth = e.detail.value
			}
		},

	}
</script>

<style scoped lang="scss">
	.tag-list {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.tag {
			font-size: 24rpx;
			border: 1rpx solid #ccc;
			border-radius: 4rpx;
			padding: 10rpx;
			margin: 0 10rpx;
		}

		.active {
			color: #fff;
			background-color: #67C23A;
			border-color: #67C23A;
		}
	}
	
	.item {
		display: flex;
		justify-content: space-between;
	}
</style>
