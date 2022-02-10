<template>
	<view class="bc-drop">
		<view @click="toggle" :class="{'bc-drop-menu-disabled': disabled}">
			<slot name="title">
				{{title}}
			</slot>
		</view>
		<view :class="[contentClass,'bc-drop-content',show?'show-ani':'']" :style="[contentColStyle]" @click="close">
			<slot></slot>
		</view>
		<view class="bc-drop-mask" v-if="show && closeOnClickMask" @click="closeMask"></view>
	</view>
</template>

<script>
	export default {
		name: 'OhDropMenu',
		data() {
			return {
				show: false,
				contentClass: "",
				systemInfo: null,
				query: null,
				contentStyleData: {
					top: '',
					bottom: '',
					'transform-origin': ''
				}
			};
		},
		props: {
			title: String,
			maxWidth: [Number, String],
			radius: {
				type: Number,
				default: 12
			},
			align: {
				type: String,
				default: "center"
			},
			closeOnClickItem: {
				type: Boolean,
				default: true
			},
			closeOnClickMask: {
				type: Boolean,
				default: true
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			contentColStyle() {
				return {
					"max-width": isNaN(Number(this.maxWidth)) ? this.maxWidth : this.maxWidth + "rpx",
					'border-radius': this.radius + 'rpx',
					'text-align': this.align,
					'transform-origin': this.contentStyleData['transform-origin'],
					'top': this.contentStyleData.top,
					'bottom': this.contentStyleData.bottom,
				}
			}
		},
		watch: {
			disabled(val) {
				if (val) {
					this.closeEmit()
				}
			}
		},
		methods: {
			closeEmit() {
				this.show = false
				this.$emit('close')
			}
			close() {
				if (this.closeOnClickItem) {
					this.closeEmit()
				}
			},
			closeMask() {
				if (this.closeOnClickMask) {
					this.closeEmit()
				}
			},
			toggle() {
				if (!this.disabled) {
					this.$emit('click',!this.show)
					this.checkPosition()
					if (this.show) {
						this.closeEmit()
					} else {
						this.show = true
						this.$emit('open')
					}
				}
			},
			checkPosition() {
				const data = this.systemInfo
				
				if (!data) {
					return;
				}
				
				// 获取开关宽高
				if (this.query) {
					this.query.select('.bc-drop').boundingClientRect(dom => {
						const {
							left,
							top
						} = dom;
					
						/* 如果按钮的位置在屏幕宽度的40%内，下拉内容居左
						如果按钮的位置在屏幕宽度的60%内，下拉内容居右
						如果按钮的位置 <= 屏幕高度的50%内，下拉方向向下
						如果按钮的位置 >屏幕高度的50%内，下拉方向向上 */
					
						if (left / data.windowWidth < 0.5) {
							this.contentClass = "left";
						} else {
							this.contentClass = "right";
						}
					
						if (top / data.windowHeight < 0.5) {
							this.contentStyleData.bottom = ''
							this.contentStyleData.top = dom.height + 5 + 'px';
							this.contentStyleData['transform-origin'] = this.contentClass +
								' top'; // 空格不要删除
						} else {
							this.contentStyleData.top = ''
							this.contentStyleData.bottom = dom.height + 5 + 'px';
							this.contentStyleData['transform-origin'] = this.contentClass +
								' bottom'; // 空格不要删除
						}
					}).exec();
				} else {
					this.query = uni.createSelectorQuery().in(this)
					this.checkPosition()
				}
			}
		},
		mounted() {
			// 获取屏幕宽高 data.windowWidth ，data.windowHeight
			uni.getSystemInfo({
				success: (data) => {
					this.systemInfo = data
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.bc-drop {
		display: inline-block;
		position: relative;
		font-size: 28rpx;

		.bc-drop-menu-disabled {
			color: #909399;
		}

		&-mask {
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			z-index: 10001;
		}

		&-content {
			position: absolute;
			background: #FFFFFF;
			z-index: 10002;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			border-radius: 8rpx;
			overflow: hidden;
			transform: scale(0);

			&.left {
				left: 0;
			}

			&.right {
				right: 0;
			}

			&.show-ani {
				transition: transform 200ms;
				transform: scale(1);
			}
		}
	}
</style>
