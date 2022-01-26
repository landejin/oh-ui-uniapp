<template>
	<text class="iconfont" :class="['icon-' + name]" :style="iconStyle" @click="clickIcon"></text>
</template>

<script>
	export default {
		name: 'OhIcon',
		props: {
			name: {
				type: String,
				required: true
			},
			size: {
				type: [Number,String],
				default: 28
			},
			color: {
				type: String
			}
		},
		computed: {
			iconStyle() {
				let _style = `font-size: ${Number(this.size) ? this.size + 'rpx' : this.size};`
				if (this.color) {
					_style += `color:${this.color};`
				}
				return _style
			}
		},
		methods: {
			clickIcon() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url('./iconfont.css');
</style>
