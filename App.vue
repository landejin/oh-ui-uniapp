<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.list {
		padding-left: 30rpx;
		
		.item {
			height: 100rpx;
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			border-bottom: 1rpx #F1F1F1 solid;
			
			.title {
				padding-left: 20rpx;
			}
		}
	}
	
	.flex-row-between {
		display: flex;
		justify-content: space-between;
	}
</style>
