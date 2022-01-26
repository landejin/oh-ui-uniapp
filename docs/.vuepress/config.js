module.exports = {
	title: 'oh-ui-uniapp文档',
	description: 'oh-ui的uniapp版本',
	base: '/', // /oh-ui-uniapp-docs
	head: [
		// ['link', { rel: 'icon', href: '/logo.png' }]
	],
	themeConfig: {
		// logo: '/assets/img/logo.png',
		search: true,
		sidebar: [{
				title: '开发指南',
				collapsable: false,
				children: [
					'/start/intro',
					// '/start/install',
					'/start/quickstart',
					'/start/changelog',
				]
			},
			{
				title: '组件',
				collapsable: false,
				children: [
					'/component/icon',
					'/component/drag-container',
					'/component/drop-menu'
				]
			}
		],
		lastUpdated: 'Last Updated',
		nextLinks: true,
		prevLinks: true,
		smoothScroll: true,
		nav: [{
				text: '组件',
				link: '/start/intro'
			},
			{
				text: '博客',
				link: 'http://www.landejin.cn'
			},
			// {
			// 	text: '更多轮子',
			// 	items: [{
			// 			text: '测试',
			// 			link: 'http://www.landejin.cn'
			// 		},
			// 		{
			// 			text: '测试',
			// 			link: 'http://www.landejin.cn/'
			// 		}
			// 	]
			// }
		]
	},
	plugins: [
		[
			'vuepress-plugin-container',
			{
				type: 'box',
				before: info => `<div class="box"><p class="title">${info}</p>`,
				after: '</div>',
			},
		]
	]
}
