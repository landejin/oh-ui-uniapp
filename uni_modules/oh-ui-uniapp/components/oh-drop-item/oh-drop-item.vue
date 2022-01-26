<template>
	<view class="bc-drop-item ellipsis" :class="{'bc-drop-item-border': divided,'bc-drop-item-disabled': disabled}" @click="clickItem">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'OhDropItem',
		props: {
			divided: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			clickItem() {
				if (!this.disabled) {
					this.$emit('click')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bc-drop-item {
		padding: 0 30rpx;
		height: 72rpx;
		line-height: 72rpx;
	}

	.bc-drop-item-border {
		border-bottom: 1rpx solid #F1F1F1;
	}

	.bc-drop-item-disabled {
		color: #909399;
	}

	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
