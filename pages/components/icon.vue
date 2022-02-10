<template>
	<view class="">
		<view class="group" v-for="item in list" :key="item.title">
			<view class="title">
				{{item.title}}
			</view>

			<view class="icon-group">
				<view class="icon" v-for="icon in item.list" :key="icon.name">
					<oh-icon :name="icon.name" size="60"></oh-icon>
					<view class="icon-text">
						{{icon.name}}
						<view class="">
							{{icon.text}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: '操作',
						list: [{
								name: 'share-line',
								text: '分享'
							}, {
								name: 'share-fill',
								text: '分享'
							},
							{
								name: 'settings-5-line',
								text: '设置'
							},
							{
								name: 'settings-5-fill',
								text: '设置'
							},
							{
								name: 'settings-4-line',
								text: '设置'
							},
							{
								name: 'settings-4-fill',
								text: '设置'
							},
							{
								name: 'bill-line',
								text: '清单'
							},
							{
								name: 'bill-fill',
								text: '清单'
							}, {
								name: 'search-line',
								text: '搜索'
							},
							{
								name: 'search-fill',
								text: '搜索'
							},
							{
								name: 'more-line',
								text: '更多'
							},
							{
								name: 'more-fill',
								text: '更多'
							},
							{
								name: 'more-2-line',
								text: '更多'
							},
							{
								name: 'more-2-fill',
								text: '更多'
							},
							{
								name: 'menu-unfold-line',
								text: '展开菜单'
							},
							{
								name: 'menu-unfold-fill',
								text: '展开菜单'
							},
							{
								name: 'menu-fold-line',
								text: '折叠菜单'
							},
							{
								name: 'menu-fold-fill',
								text: '折叠菜单'
							},
							{
								name: 'menu-line',
								text: '菜单'
							},
							{
								name: 'menu-fill',
								text: '菜单'
							},
							{
								name: 'function-line',
								text: '菜单'
							},
							{
								name: 'function-fill',
								text: '菜单'
							},
							{
								name: 'shut-down-line',
								text: '待机'
							},
							{
								name: 'shut-down-fill',
								text: '待机'
							},
							{
								name: 'loader-line',
								text: '加载中'
							},
							{
								name: 'loader-fill',
								text: '加载中'
							},
							{
								name: 'loader-2-line',
								text: '加载中'
							},
							{
								name: 'loader-2-fill',
								text: '加载中'
							},
							{
								name: 'qr-scan-2-line',
								text: '扫码'
							},
							{
								name: 'qr-scan-2-fill',
								text: '扫码'
							},
							{
								name: 'fingerprint-line',
								text: '指纹'
							},
							{
								name: 'fingerprint-2-fill',
								text: '指纹'
							},
							{
								name: 'eye-close-line',
								text: '闭眼'
							},
							{
								name: 'eye-close-fill',
								text: '闭眼'
							},
							{
								name: 'eye-line',
								text: '睁眼'
							},
							{
								name: 'eye-fill',
								text: '睁眼'
							},
							{
								name: 'filter-2-line',
								text: '过滤'
							},
							{
								name: 'filter-2-fill',
								text: '过滤'
							},
							{
								name: 'indeterminate-circle-line',
								text: '移除'
							},
							{
								name: 'indeterminate-circle-fill',
								text: '移除'
							},
							{
								name: 'checkbox-indeterminate-line',
								text: '移除'
							},
							{
								name: 'checkbox-indeterminate-fill',
								text: '移除'
							},
							{
								name: 'delete-bin-7-line',
								text: '删除'
							},
							{
								name: 'delete-bin-7-fill',
								text: '删除'
							},
							{
								name: 'delete-bin-6-line',
								text: '删除'
							},
							{
								name: 'delete-bin-6-fill',
								text: '删除'
							},
							{
								name: 'delete-back-2-line',
								text: '回退'
							},
							{
								name: 'delete-back-2-fill',
								text: '回退'
							},
							{
								name: 'add-circle-line',
								text: '添加'
							},
							{
								name: 'add-circle-fill',
								text: '添加'
							},
							{
								name: 'add-line',
								text: '添加'
							},
							{
								name: 'add-fill',
								text: '添加'
							},
							{
								name: 'add-box-line',
								text: '添加'
							},
							{
								name: 'add-box-fill',
								text: '添加'
							},
							{
								name: 'download-2-line',
								text: '下载'
							},
							{
								name: 'download-2-fill',
								text: '下载'
							},
							{
								name: 'inbox-archive-line',
								text: '下载'
							},
							{
								name: 'inbox-archive-fill',
								text: '下载'
							},
							{
								name: 'close-line',
								text: '关闭'
							},
							{
								name: 'close-fill',
								text: '关闭'
							},
							{
								name: 'close-circle-line',
								text: '关闭'
							},
							{
								name: 'close-circle-fill',
								text: '关闭'
							},
							{
								name: 'checkbox-line',
								text: '勾选'
							},
							{
								name: 'checkbox-fill',
								text: '勾选'
							},
							{
								name: 'checkbox-circle-line',
								text: '勾选'
							},
							{
								name: 'checkbox-circle-fill',
								text: '勾选'
							},
							{
								name: 'check-line',
								text: '完成'
							},
							{
								name: 'check-fill',
								text: '完成'
							},
							{
								name: 'send-plane-line',
								text: '发送'
							},
							{
								name: 'send-plane-fill',
								text: '发送'
							},
							{
								name: 'inbox-unarchive-line',
								text: '上传'
							},
							{
								name: 'inbox-unarchive-fill',
								text: '上传'
							},
							{
								name: 'upload-cloud-2-line',
								text: '上传'
							},
							{
								name: 'upload-cloud-2-fill',
								text: '上传'
							},
							{
								name: 'upload-2-line',
								text: '上传'
							},
							{
								name: 'upload-2-fill',
								text: '上传'
							},
							{
								name: 'bookmark-3-line',
								text: '书签'
							},
							{
								name: 'bookmark-3-fill',
								text: '书签'
							},
							{
								name: 'bookmark-line',
								text: '书签'
							},
							{
								name: 'bookmark-fill',
								text: '书签'
							},
							{
								name: 'bookmark-2-line',
								text: '移除书签'
							},
							{
								name: 'bookmark-2-fill',
								text: '移除书签'
							},
							{
								name: 'notification-4-line',
								text: '通知'
							},
							{
								name: 'notification-4-fill',
								text: '通知'
							},
							{
								name: 'notification-off-line',
								text: '关闭通知'
							},
							{
								name: 'notification-off-fill',
								text: '关闭通知'
							},
							{
								name: 'home-2-line',
								text: '首页'
							},
							{
								name: 'home-2-fill',
								text: '首页'
							},
							{
								name: 'equalizer-line',
								text: '设置'
							},
							{
								name: 'equalizer-fill',
								text: '设置'
							},
							{
								name: 'zoom-in-line',
								text: '放大'
							},
							{
								name: 'zoom-in-fill',
								text: '放大'
							},
							{
								name: 'zoom-out-line',
								text: '缩小'
							},
							{
								name: 'zoom-out-fill',
								text: '缩小'
							},
							{
								name: 'thumb-down-line',
								text: '踩'
							},
							{
								name: 'thumb-down-fill',
								text: '踩'
							},
							{
								name: 'thumb-up-line',
								text: '赞'
							},
							{
								name: 'thumb-up-fill',
								text: '赞'
							}
						]
					},
					{
						title: '方向',
						list: [{
								name: 'arrow-up-s-line',
								text: '上'
							}, {
								name: 'arrow-up-s-fill',
								text: '上'
							},
							{
								name: 'arrow-up-line',
								text: '上'
							}, {
								name: 'arrow-up-fill',
								text: '上'
							},
							{
								name: 'arrow-up-circle-line',
								text: '上'
							}, {
								name: 'arrow-up-circle-fill',
								text: '上'
							},
							{
								name: 'arrow-right-s-line',
								text: '右'
							},
							{
								name: 'arrow-right-s-fill',
								text: '右'
							},
							{
								name: 'arrow-right-line',
								text: '右'
							},
							{
								name: 'arrow-right-fill',
								text: '右'
							},
							{
								name: 'arrow-right-circle-line',
								text: '右'
							},
							{
								name: 'arrow-right-circle-fill',
								text: '右'
							},

							{
								name: 'arrow-left-s-line',
								text: '左'
							},
							{
								name: 'arrow-left-s-fill',
								text: '左'
							},
							{
								name: 'arrow-left-line',
								text: '左'
							},
							{
								name: 'arrow-left-fill',
								text: '左'
							},
							{
								name: 'arrow-left-circle-line',
								text: '左'
							},
							{
								name: 'arrow-left-circle-fill',
								text: '左'
							},

							{
								name: 'arrow-down-s-line',
								text: '下'
							},
							{
								name: 'arrow-down-s-fill',
								text: '下'
							},
							{
								name: 'arrow-down-line',
								text: '下'
							},
							{
								name: 'arrow-down-fill',
								text: '下'
							},
							{
								name: 'arrow-down-circle-line',
								text: '下'
							},
							{
								name: 'arrow-down-circle-fill',
								text: '下'
							},
						]
					},
					{
						title: '编辑器',
						list: [{
								name: 'palette-line',
								text: '颜色'
							},
							{
								name: 'palette-fill',
								text: '颜色'
							},
							{
								name: 'scissors-2-line',
								text: '剪切'
							},
							{
								name: 'scissors-2-fill',
								text: '剪切'
							},
							{
								name: 'pencil-line',
								text: '编辑'
							},
							{
								name: 'pencil-fill',
								text: '编辑'
							},
							{
								name: 'edit-line',
								text: '编辑'
							},
							{
								name: 'edit-fill',
								text: '编辑'
							},
							{
								name: 'edit-box-line',
								text: '编辑'
							},
							{
								name: 'edit-box-fill',
								text: '编辑'
							},
							{
								name: 'lock-unlock-line',
								text: '解锁'
							},
							{
								name: 'lock-unlock-fill',
								text: '解锁'
							},
							{
								name: 'lock-2-line',
								text: '锁定'
							},
							{
								name: 'lock-fill',
								text: '锁定'
							},
							{
								name: 'save-line',
								text: '保存'
							},
							{
								name: 'save-fill',
								text: '保存'
							},
							{
								name: 'restart-line',
								text: '刷新'
							},
							{
								name: 'restart-fill',
								text: '刷新'
							},
							{
								name: 'history-line',
								text: '撤销'
							},
							{
								name: 'history-fill',
								text: '撤销'
							},
							{
								name: 'magic-line',
								text: '美化'
							},
							{
								name: 'magic-fill',
								text: '美化'
							},
							{
								name: 'layout-grid-fill',
								text: '布局'
							},
							{
								name: 'focus-3-line',
								text: '定位'
							},
							{
								name: 'focus-3-fill',
								text: '定位'
							},
							{
								name: 'crop-line',
								text: '裁剪'
							},
							{
								name: 'crop-fill',
								text: '裁剪'
							},
							{
								name: 'contrast-line',
								text: '对比'
							},
							{
								name: 'contrast-fill',
								text: '对比'
							},
							{
								name: 'brush-3-line',
								text: '格式刷'
							},
							{
								name: 'brush-3-fill',
								text: '格式刷'
							},
							{
								name: 'arrow-go-back-line',
								text: '撤销'
							},
							{
								name: 'arrow-go-back-fill',
								text: '撤销'
							},
							{
								name: 'arrow-go-forward-line',
								text: '重做'
							},
							{
								name: 'arrow-go-forward-fill',
								text: '重做'
							},
							{
								name: 'stack-line',
								text: '层级'
							},
							{
								name: 'stack-fill',
								text: '层级'
							},
						]
					},
					{
						title: '用品',
						list: [{
								name: 'book-open-line',
								text: '打开书本'
							}, {
								name: 'book-open-fill',
								text: '打开书本'
							}, {
								name: 'book-3-line',
								text: '书本'
							},
							{
								name: 'book-3-fill',
								text: '书本'
							},
							{
								name: 'git-repository-line',
								text: 'git book'
							},
							{
								name: 'git-repository-fill',
								text: 'git book'
							},
							{
								name: 'smartphone-line',
								text: '手机'
							},
							{
								name: 'smartphone-fill',
								text: '手机'
							},
							{
								name: 'cellphone-line',
								text: '手机'
							},
							{
								name: 'computer-fill',
								text: '电脑'
							},
							{
								name: 'computer-line',
								text: '电脑'
							},
							{
								name: 'cellphone-fill',
								text: '手机'
							},
							{
								name: 'qr-code-line',
								text: '二维码'
							},
							{
								name: 'qr-code-fill',
								text: '二维码'
							},
							{
								name: 'barcode-line',
								text: '条形码'
							},
							{
								name: 'barcode-fill',
								text: '条形码'
							},
							{
								name: 'alarm-line',
								text: '闹钟'
							},
							{
								name: 'alarm-fill',
								text: '闹钟'
							},
							{
								name: 'printer-line',
								text: '打印机'
							},
							{
								name: 'printer-fill',
								text: '打印机'
							},
							{
								name: 'attachment-line',
								text: '别针'
							},
							{
								name: 'calendar-check-line',
								text: '日历'
							},
							{
								name: 'calendar-check-fill',
								text: '日历'
							},
							{
								name: 'calendar-2-line',
								text: '日历'
							},
							{
								name: 'calendar-2-fill',
								text: '日历'
							},
							{
								name: 'archive-line',
								text: '盒子'
							},
							{
								name: 'archive-fill',
								text: '盒子'
							},
							{
								name: 'headphone-line',
								text: '耳机'
							},
							{
								name: 'headphone-fill',
								text: '耳机'
							},
							{
								name: 'map-line',
								text: '地图'
							},
							{
								name: 'map-fill',
								text: '地图'
							},
							{
								name: 'temp-hot-line',
								text: '温度计'
							},
							{
								name: 'temp-hot-fill',
								text: '温度计'
							},
							{
								name: 'flask-line',
								text: '烧杯'
							},
							{
								name: 'flask-fill',
								text: '烧杯'
							},
							{
								name: 'timer-line',
								text: '秒表'
							},
							{
								name: 'timer-fill',
								text: '秒表'
							},
						]
					},
					{
						title: '标识',
						list: [{
								name: 'signal-wifi-off-line',
								text: 'wifi断开'
							}, {
								name: 'signal-wifi-off-fill',
								text: 'wifi断开'
							}, {
								name: 'signal-wifi-line',
								text: '无wifi'
							},
							{
								name: 'signal-wifi-fill',
								text: '无wifi'
							},
							{
								name: 'signal-wifi-2-line',
								text: 'wifi信号弱'
							},
							{
								name: 'signal-wifi-2-fill',
								text: 'wifi信号弱'
							},
							{
								name: 'signal-wifi-3-line',
								text: 'wifi信号良好'
							},
							{
								name: 'signal-wifi-3-fill',
								text: 'wifi信号良好'
							},
							{
								name: 'bluetooth-line',
								text: '蓝牙'
							},
							{
								name: 'bluetooth-fill',
								text: '蓝牙'
							},
							{
								name: 'battery-2-line',
								text: '电量不足'
							},
							{
								name: 'battery-2-fill',
								text: '电量充足'
							},
							{
								name: 'battery-2-charge-line',
								text: '充电中'
							},
							{
								name: 'battery-2-charge-fill',
								text: '充电中'
							},
							{
								name: 'window-line',
								text: '窗口'
							},
							{
								name: 'window-fill',
								text: '窗口'
							},
							{
								name: 'terminal-box-line',
								text: '控制台'
							},
							{
								name: 'terminal-box-fill',
								text: '控制台'
							},
							{
								name: 'terminal-line',
								text: '命令行'
							},
							{
								name: 'terminal-fill',
								text: '命令行'
							},
							{
								name: 'code-s-slash-line',
								text: '代码'
							},
							{
								name: 'code-s-slash-fill',
								text: '代码'
							},
							{
								name: 'code-box-line',
								text: '代码块'
							},
							{
								name: 'code-box-fill',
								text: '代码块'
							},
							{
								name: 'bug-line',
								text: 'bug'
							},
							{
								name: 'bug-fill',
								text: 'bug'
							},
							{
								name: 'bug-2-line',
								text: 'bug'
							},
							{
								name: 'bug-2-fill',
								text: 'bug'
							},
							{
								name: 'information-line',
								text: '信息'
							},
							{
								name: 'information-fill',
								text: '信息'
							},
							{
								name: 'question-line',
								text: '说明'
							},
							{
								name: 'question-fill',
								text: '说明'
							},
							{
								name: 'grid-fill',
								text: '宫格'
							},
							{
								name: 'chat-4-line',
								text: '消息'
							},
							{
								name: 'chat-4-fill',
								text: '消息'
							},
							{
								name: 'chat-3-line',
								text: '消息'
							},
							{
								name: 'chat-3-fill',
								text: '消息'
							},
							{
								name: 'chat-2-line',
								text: '消息'
							},
							{
								name: 'chat-2-fill',
								text: '消息'
							},
							{
								name: 'chat-1-line',
								text: '消息'
							},
							{
								name: 'chat-1-fill',
								text: '消息'
							},
							{
								name: 'trademark-line',
								text: '商标TM'
							},
							{
								name: 'trademark-fill',
								text: '商标TM'
							},
							{
								name: 'copyright-line',
								text: '版权'
							},
							{
								name: 'copyright-fill',
								text: '版权'
							},
							{
								name: 'copyleft-line',
								text: '版权'
							},
							{
								name: 'copyleft-fill',
								text: '版权'
							},
							{
								name: 'at-line',
								text: '@'
							},
							{
								name: 'at-fill',
								text: '@'
							},
							{
								name: 'apps-2-line',
								text: '应用程序'
							},
							{
								name: 'apps-2-fill',
								text: '应用程序'
							},
							{
								name: 'slideshow-2-line',
								text: '演示'
							},
							{
								name: 'slideshow-2-fill',
								text: '演示'
							},
							{
								name: 'alert-line',
								text: '警告'
							},
							{
								name: 'alert-fill',
								text: '警告'
							},
							{
								name: 'pie-chart-line',
								text: '饼图'
							},
							{
								name: 'pie-chart-fill',
								text: '饼图'
							},
							{
								name: 'pie-chart-2-line',
								text: '饼图'
							},
							{
								name: 'pie-chart-2-fill',
								text: '饼图'
							},
							{
								name: 'line-chart-line',
								text: '折线图'
							},
							{
								name: 'line-chart-fill',
								text: '折线图'
							},
							{
								name: 'donut-chart-line',
								text: '饼图'
							},
							{
								name: 'donut-chart-fill',
								text: '饼图'
							},
							{
								name: 'bar-chart-fill',
								text: '条形图'
							},
							{
								name: 'sword-line',
								text: '战斗'
							},
							{
								name: 'sword-fill',
								text: '战斗'
							},
							{
								name: 'mail-open-line',
								text: '短信已读'
							},
							{
								name: 'mail-open-fill',
								text: '短信已读'
							},
							{
								name: 'mail-line',
								text: '短信'
							},
							{
								name: 'mail-fill',
								text: '短信'
							},
							{
								name: 'links-line',
								text: '链接'
							},
							{
								name: 'links-fill',
								text: '链接'
							},
							{
								name: 'flag-2-line',
								text: '标识'
							},
							{
								name: 'flag-2-fill',
								text: '标识'
							},
							{
								name: 'cloud-line',
								text: '云'
							},
							{
								name: 'cloud-fill',
								text: '云'
							},
							{
								name: 'award-line',
								text: '奖章'
							},
							{
								name: 'award-fill',
								text: '奖章'
							},
							{
								name: 'building-2-line',
								text: '城市'
							},
							{
								name: 'building-2-fill',
								text: '城市'
							},
							{
								name: 'map-pin-2-line',
								text: '定位'
							},
							{
								name: 'map-pin-2-fill',
								text: '定位'
							},
							{
								name: 'earth-line',
								text: '全球'
							},
							{
								name: 'earth-fill',
								text: '全球'
							},
							{
								name: 'sun-line',
								text: '太阳'
							},
							{
								name: 'sun-fill',
								text: '太阳'
							},
							{
								name: 'moon-line',
								text: '月亮'
							},
							{
								name: 'moon-fill',
								text: '月亮'
							},
							{
								name: 'zzz-line',
								text: '睡眠'
							},
							{
								name: 'zzz-fill',
								text: '睡眠'
							},
							{
								name: 'cloudy-2-line',
								text: '云'
							},
							{
								name: 'cloudy-2-fill',
								text: '云'
							},
							{
								name: 'heart-3-line',
								text: '喜欢'
							},
							{
								name: 'heart-3-fill',
								text: '喜欢'
							},
							{
								name: 'heart-line',
								text: '喜欢'
							},
							{
								name: 'heart-fill',
								text: '喜欢'
							},
							{
								name: 'women-line',
								text: '女性'
							},
							{
								name: 'women-fill',
								text: '女性'
							},
							{
								name: 'men-line',
								text: '男性'
							},
							{
								name: 'men-fill',
								text: '男性'
							},
							{
								name: 'user-3-line',
								text: '用户'
							},
							{
								name: 'user-3-fill',
								text: '用户'
							},
							{
								name: 'account-circle-line',
								text: '账户'
							},
							{
								name: 'account-circle-fill',
								text: '账户'
							},
							{
								name: 'account-box-line',
								text: '通讯录'
							},
							{
								name: 'account-box-fill',
								text: '通讯录'
							},
							{
								name: 'contacts-book-2-line',
								text: '通讯录'
							},
							{
								name: 'contacts-book-2-fill',
								text: '通讯录'
							},
							{
								name: 'group-line',
								text: '用户组'
							},
							{
								name: 'group-fill',
								text: '用户组'
							},
							{
								name: 'time-line',
								text: '时间'
							},
							{
								name: 'time-fill',
								text: '时间'
							},
							// {
							// 	name: 'folder-line',
							// 	text: '文件夹'
							// },
							// {
							// 	name: 'folder-fill',
							// 	text: '文件夹'
							// },
							{
								name: 'folder-2-line',
								text: '文件夹'
							},
							{
								name: 'folder-2-fill',
								text: '文件夹'
							},
							{
								name: 'file-zip-line',
								text: '压缩包'
							},
							{
								name: 'file-zip-fill',
								text: '压缩包'
							},
							{
								name: 'file-2-line',
								text: '文件'
							},
							{
								name: 'file-2-fill',
								text: '文件'
							},
							{
								name: 'draft-line',
								text: '记录'
							},
							{
								name: 'draft-fill',
								text: '记录'
							},
							{
								name: 'shield-line',
								text: '安全'
							},
							{
								name: 'shield-fill',
								text: '安全'
							},
							{
								name: 'shield-check-line',
								text: '安全'
							},
							{
								name: 'shield-check-fill',
								text: '安全'
							},
							{
								name: 'clipboard-line',
								text: '剪切板'
							},
							{
								name: 'clipboard-fill',
								text: '剪切板'
							},
						]
					},
					{
						title: '电商',
						list: [{
								name: 'customer-service-line',
								text: '客服'
							},
							{
								name: 'customer-service-fill',
								text: '客服'
							},
							{
								name: 'customer-service-2-line',
								text: '客服'
							},
							{
								name: 'customer-service-2-fill',
								text: '客服'
							},
							{
								name: 'vip-diamond-line',
								text: 'vip'
							},
							{
								name: 'vip-diamond-fill',
								text: 'vip'
							},
							{
								name: 'vip-crown-2-line',
								text: '皇冠'
							},
							{
								name: 'vip-crown-2-fill',
								text: '皇冠'
							},
							{
								name: 'wallet-3-line',
								text: '钱包'
							},
							{
								name: 'wallet-3-fill',
								text: '钱包'
							},
							{
								name: 'coupon-2-line',
								text: '卡劵'
							},
							{
								name: 'coupon-2-fill',
								text: '卡劵'
							},
							{
								name: 'coupon-3-line',
								text: '卡劵'
							},
							{
								name: 'coupon-3-fill',
								text: '卡劵'
							},
							{
								name: 'ticket-line',
								text: '卡劵'
							},
							{
								name: 'ticket-fill',
								text: '卡劵'
							},
							{
								name: 'gift-line',
								text: '礼包'
							},
							{
								name: 'gift-fill',
								text: '礼包'
							},
							{
								name: 'trophy-line',
								text: '奖杯'
							},
							{
								name: 'trophy-fill',
								text: '奖杯'
							},
							{
								name: 'emotion-unhappy-line',
								text: '差评'
							},
							{
								name: 'emotion-unhappy-fill',
								text: '差评'
							},
							{
								name: 'emotion-line',
								text: '好评'
							},
							{
								name: 'emotion-fill',
								text: '好评'
							},
							{
								name: 'store-2-line',
								text: '店铺'
							},
							{
								name: 'store-2-fill',
								text: '店铺'
							},
							{
								name: 'shopping-cart-line',
								text: '购物车'
							},
							{
								name: 'shopping-cart-fill',
								text: '购物车'
							},
							{
								name: 'price-tag-line',
								text: '标签'
							},
							{
								name: 'price-tag-fill',
								text: '标签'
							},
							{
								name: 'price-tag-3-line',
								text: '标签'
							},
							{
								name: 'price-tag-3-fill',
								text: '标签'
							},
							{
								name: 'shopping-bag-line',
								text: '购物袋'
							},
							{
								name: 'shopping-bag-fill',
								text: '购物袋'
							},
							{
								name: 'red-packet-line',
								text: '红包'
							},
							{
								name: 'red-packet-fill',
								text: '红包'
							},
							{
								name: 'star-half-line',
								text: '评分'
							},
							{
								name: 'star-half-fill',
								text: '评分'
							},
							{
								name: 'star-line',
								text: '评分'
							},
							{
								name: 'star-fill',
								text: '评分'
							},
						]
					},
					{
						title: '多媒体',
						list: [{
								name: 'volume-up-line',
								text: '音量大'
							}, {
								name: 'volume-up-fill',
								text: '音量大'
							}, {
								name: 'volume-mute-line',
								text: '静音'
							},
							{
								name: 'volume-mute-fill',
								text: '静音'
							},
							{
								name: 'volume-down-line',
								text: '音量小'
							},
							{
								name: 'volume-down-fill',
								text: '音量小'
							},
							{
								name: 'speed-line',
								text: '快进'
							},
							{
								name: 'speed-fill',
								text: '快进'
							},
							{
								name: 'rewind-line',
								text: '快退'
							},
							{
								name: 'rewind-fill',
								text: '快退'
							},
							{
								name: 'skip-back-line',
								text: '上一部'
							},
							{
								name: 'skip-back-fill',
								text: '上一部'
							},
							{
								name: 'skip-forward-line',
								text: '下一部'
							},
							{
								name: 'skip-forward-fill',
								text: '下一部'
							},
							{
								name: 'play-list-2-line',
								text: '播放列表'
							},
							{
								name: 'play-list-2-fill',
								text: '播放列表'
							},
							{
								name: 'play-line',
								text: '播放'
							},
							{
								name: 'play-fill',
								text: '播放'
							},
							{
								name: 'play-circle-line',
								text: '播放'
							},
							{
								name: 'play-circle-fill',
								text: '播放'
							},
							{
								name: 'pause-line',
								text: '暂停'
							},
							{
								name: 'pause-fill',
								text: '暂停'
							},
							{
								name: 'pause-circle-line',
								text: '暂停'
							},
							{
								name: 'pause-circle-fill',
								text: '暂停'
							},
							{
								name: 'picture-in-picture-line',
								text: '画中画'
							},
							{
								name: 'picture-in-picture-fill',
								text: '画中画'
							},
							{
								name: 'vidicon-line',
								text: '录像'
							},
							{
								name: 'vidicon-fill',
								text: '录像'
							},
							{
								name: 'live-line',
								text: '录像'
							},
							{
								name: 'live-fill',
								text: '录像'
							},
							{
								name: 'stop-line',
								text: '停止录像'
							},
							{
								name: 'stop-fill',
								text: '停止录像'
							},
							{
								name: 'stop-circle-line',
								text: '停止录像'
							},
							{
								name: 'stop-circle-fill',
								text: '停止录像'
							},
							{
								name: 'music-line',
								text: '音符'
							},
							{
								name: 'music-fill',
								text: '音符'
							},
							{
								name: 'music-2-line',
								text: '音符'
							},
							{
								name: 'music-2-fill',
								text: '音符'
							},
							{
								name: 'mic-off-line',
								text: '闭麦'
							},
							{
								name: 'mic-off-fill',
								text: '闭麦'
							},
							{
								name: 'mic-line',
								text: '开麦'
							},
							{
								name: 'mic-fill',
								text: '开麦'
							},
							{
								name: 'image-line',
								text: '图片'
							},
							{
								name: 'image-fill',
								text: '图片'
							},
							{
								name: 'camera-line',
								text: '相机'
							},
							{
								name: 'camera-fill',
								text: '相机'
							},
							{
								name: 'camera-switch-line',
								text: '调转摄像机'
							},
							{
								name: 'camera-switch-fill',
								text: '调转摄像机'
							},
							{
								name: 'fullscreen-line',
								text: '全屏'
							},
							{
								name: 'fullscreen-exit-line',
								text: '退出全屏'
							}
						]
					},
					{
						title: '品牌',
						list: [{
								name: 'wechat-line',
								text: '微信'
							},
							{
								name: 'wechat-fill',
								text: '微信'
							},
							{
								name: 'wechat-pay-line',
								text: '微信支付'
							},
							{
								name: 'wechat-pay-fill',
								text: '微信支付'
							},
							{
								name: 'zhihu-line',
								text: '知乎'
							},
							{
								name: 'zhihu-fill',
								text: '知乎'
							},
							{
								name: 'windows-line',
								text: 'windows'
							},
							{
								name: 'windows-fill',
								text: 'windows'
							},
							{
								name: 'weibo-line',
								text: '新浪微博'
							},
							{
								name: 'weibo-fill',
								text: '新浪微博'
							},
							{
								name: 'taobao-line',
								text: '淘宝'
							},
							{
								name: 'taobao-fill',
								text: '淘宝'
							},
							{
								name: 'safari-line',
								text: 'safari'
							},
							{
								name: 'safari-fill',
								text: 'safari'
							},
							{
								name: 'qq-line',
								text: 'QQ'
							},
							{
								name: 'qq-fill',
								text: 'QQ'
							},
							{
								name: 'mini-program-line',
								text: '小程序'
							},
							{
								name: 'mini-program-fill',
								text: '小程序'
							},
							{
								name: 'ie-line',
								text: 'ie'
							},
							{
								name: 'ie-fill',
								text: 'ie'
							},
							{
								name: 'edge-line',
								text: 'edge'
							},
							{
								name: 'edge-fill',
								text: 'edge'
							},
							{
								name: 'firefox-line',
								text: '火狐'
							},
							{
								name: 'firefox-fill',
								text: '火狐'
							},
							{
								name: 'github-line',
								text: 'github'
							},
							{
								name: 'github-fill',
								text: 'github'
							},
							{
								name: 'douban-line',
								text: '豆瓣'
							},
							{
								name: 'douban-fill',
								text: '豆瓣'
							},
							{
								name: 'chrome-line',
								text: 'chrome'
							},
							{
								name: 'chrome-fill',
								text: 'chrome'
							},
							{
								name: 'baidu-line',
								text: '百度'
							},
							{
								name: 'baidu-fill',
								text: '百度'
							},
							{
								name: 'bilibili-line',
								text: 'bilibili'
							},
							{
								name: 'bilibili-fill',
								text: 'bilibili'
							},
							{
								name: 'alipay-line',
								text: '支付宝'
							},
							{
								name: 'alipay-fill',
								text: '支付宝'
							},
							{
								name: 'apple-line',
								text: 'apple'
							},
							{
								name: 'apple-fill',
								text: 'apple'
							},
							{
								name: 'android-line',
								text: 'android'
							},
							{
								name: 'android-fill',
								text: 'android'
							},
						]
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.group {
		padding: 30rpx 0;
		position: relative;

		&::before {
			content: "";
			position: absolute;
			height: 1rpx;
			bottom: 0;
			left: 30rpx;
			right: 0;
			background: #eee;
		}
	}

	.title {
		padding: 20rpx;
		font-size: 36rpx;
		color: #666;
	}

	.icon-group {
		display: flex;
		flex-wrap: wrap;

		.icon {
			text-align: center;
			width: 20%;
			// border: 1rpx solid #aaa;
			padding: 20rpx 0;
			font-size: 24rpx;

			.icon-text {
				padding-top: 20rpx;
			}
		}
	}
</style>
