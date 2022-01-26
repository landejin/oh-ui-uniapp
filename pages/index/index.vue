<template>
	<view class="list">
		<view class="item" v-for="(item,index) in list" :key="index" @click="toPage(item)">
			<oh-icon :name="item.icon" size="40" :color="item.color"></oh-icon>
			<view class="title">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						title: 'oh-icon 图标',
						icon: 'apps-2-line',
						color: '#ffdd00',
						page: '/pages/components/icon'
					},
					{
						title: 'oh-drag-container 拖拽容器',
						icon: 'lock-unlock-line',
						color: '#91E5F6',
						page: '/pages/components/drag-container'
					},
					{
						title: 'oh-drop-ment 下拉菜单',
						icon: 'menu-fill',
						color: '#67C23A',
						page: '/pages/components/drop-menu'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			toPage(item) {
				uni.navigateTo({
					url: item.page
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	
</style>
