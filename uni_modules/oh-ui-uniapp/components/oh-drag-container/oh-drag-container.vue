<template>
	<view class="oh-drag-container" v-if="disabled" :style="drawStyle">
		<slot></slot>
	</view>
	<view v-else class="oh-drag-container" @touchstart="touchstart" @touchmove.stop.prevent="touchmove"
		@touchend="touchend" :style="drawStyle">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'OhDragContainer',
		props: {
			sticky: {
				type: Boolean,
				default: true
			},
			stickyLeft: {
				type: Boolean,
				default: true
			},
			disabled: {
				type: Boolean,
				default: false
			},
			zIndex: {
				type: Number,
				default: 99999
			},
			startTop: {
				type: [String,Number],
				default: '50%'
			}
		},
		data() {
			return {
				startPoint: {
					left: 0,
					top: 0
				},
				moveDistance: {
					x: 0,
					y: 0
				},
				prevPoint: {
					x: 0,
					y: 0
				},
				screen: {
					windowWidth: 0,
					windowHeight: 0
				},
				isInitScreen: false
			}
		},
		computed: {
			drawStyle() {
				return `transform: translate(${this.moveDistance.x}px,${this.moveDistance.y}px);z-index: ${this.zIndex};top: ${Number(this.startTop) ? this.startTop + 'rpx': this.startTop}`
			}
		},
		created() {
			uni.getSystemInfo({
				success: (data) => {
					this.screen = data
					this.isInitScreen = true
				}
			})
		},
		methods: {
			touchstart(e) {
				this.startPoint.left = e.touches[0].pageX
				this.startPoint.top = e.touches[0].pageY
				this.$emit('start',this.startPoint.left,this.startPoint.top)
			},
			touchmove(e) {
				this.moveDistance.x = this.prevPoint.x + (e.touches[0].pageX - this.startPoint.left)
				this.moveDistance.y = this.prevPoint.y + (e.touches[0].pageY - this.startPoint.top)
			},
			touchend(e) {
				this.prevPoint.x = this.moveDistance.x
				this.prevPoint.y = this.moveDistance.y

				if (!this.isInitScreen) {
					return
				}

				this.getComponentsDomInfo().then(dom => {
					const {
						width,
						height
					} = dom;

					//吸附到左右边框上
					if (this.sticky) {
						// 获取屏幕宽高，判断元素位置与屏幕关系
						if (this.stickyLeft && this.moveDistance.x / this.screen.windowWidth < -0.5) {
							this.moveDistance.x = -this.screen.windowWidth + width;
						} else {
							this.moveDistance.x = 0;
						}

						this.prevPoint.x = this.moveDistance.x
						this.prevPoint.y = this.moveDistance.y
					}
					
					this.$emit('end',this.moveDistance.x,this.moveDistance.y)
				})
			},
			getComponentsDomInfo() {
				return new Promise(resolve => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.oh-drag-container').boundingClientRect(dom => {
						resolve(dom)
					}).exec()
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.oh-drag-container {
		position: fixed;
		top: 50%;
		right: 0;
	}
</style>
