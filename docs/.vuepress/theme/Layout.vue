<template>
	<div class="theme-container" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
		<!-- <Content/> -->
		<Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

		<div class="sidebar-mask" @click="toggleSidebar(false)" />

		<Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
			<template #top>
				<slot name="sidebar-top" />
			</template>
			<template #bottom>
				<slot name="sidebar-bottom" />
			</template>
		</Sidebar>

		<Home v-if="$page.frontmatter.home" />

		<template v-else>
			<div class="content">
				<Page :sidebar-items="sidebarItems">
					<template #top>
						<slot name="page-top" />
					</template>
					<template #bottom>
						<slot name="page-bottom" />
					</template>
				</Page>
			</div>

			<iframe id="iframe" height=350 width=80% frameborder=0 allowfullscreen="true" src="http://www.landejin.cn/oh-ui-uniapp">
			</iframe>
		</template>
	</div>
</template>

<script>
	import Home from '@theme/components/Home.vue'
	import Navbar from '@theme/components/Navbar.vue'
	import Page from '@theme/components/Page.vue'
	import Sidebar from '@theme/components/Sidebar.vue'
	import {
		resolveSidebarItems
	} from '../util'

	export default {
		name: 'Layout',

		components: {
			Home,
			Page,
			Sidebar,
			Navbar
		},

		data() {
			return {
				isSidebarOpen: false
			}
		},

		computed: {
			shouldShowNavbar() {
				const {
					themeConfig
				} = this.$site
				const {
					frontmatter
				} = this.$page
				if (
					frontmatter.navbar === false ||
					themeConfig.navbar === false) {
					return false
				}
				return (
					this.$title ||
					themeConfig.logo ||
					themeConfig.repo ||
					themeConfig.nav ||
					this.$themeLocaleConfig.nav
				)
			},

			shouldShowSidebar() {
				const {
					frontmatter
				} = this.$page
				return (
					!frontmatter.home &&
					frontmatter.sidebar !== false &&
					this.sidebarItems.length
				)
			},

			sidebarItems() {
				return resolveSidebarItems(
					this.$page,
					this.$page.regularPath,
					this.$site,
					this.$localePath
				)
			},

			pageClasses() {
				const userPageClass = this.$page.frontmatter.pageClass
				return [{
						'no-navbar': !this.shouldShowNavbar,
						'sidebar-open': this.isSidebarOpen,
						'no-sidebar': !this.shouldShowSidebar
					},
					userPageClass
				]
			}
		},

		mounted() {
			this.$router.afterEach(() => {
				this.isSidebarOpen = false
			})
		},

		methods: {
			toggleSidebar(to) {
				this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
				this.$emit('toggle-sidebar', this.isSidebarOpen)
			},

			// side swipe
			onTouchStart(e) {
				this.touchStart = {
					x: e.changedTouches[0].clientX,
					y: e.changedTouches[0].clientY
				}
			},

			onTouchEnd(e) {
				const dx = e.changedTouches[0].clientX - this.touchStart.x
				const dy = e.changedTouches[0].clientY - this.touchStart.y
				if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
					if (dx > 0 && this.touchStart.x <= 80) {
						this.toggleSidebar(true)
					} else {
						this.toggleSidebar(false)
					}
				}
			}
		}
	}
</script>


<style>
	html,body {
		background-color: #f7f8fa;
	}
	
	.sidebar {
		width: 15em;
	}
	
	.page {
		padding-left: 15em;
	}
	
	#iframe {
		width: 375px;
		position: fixed;
		right: 20px;
		top: 88px;
		height: calc(100vh - 88px - 30px);
		background-color: #fff;
		box-shadow: 0 8px 12px #ebedf0;
		border-radius: 20px;
		border: #eee solid 1px;
	}

	.content {
		width: calc(100% - 400px);
	}
</style>
