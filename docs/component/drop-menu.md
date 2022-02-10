# 下拉菜单
::: box 组件说明
下拉菜单组件，会根据组件当前所处的屏幕位置，决定向下展开还是向上展开。
:::

### 代码演示
<br/>

::: box 基本使用
`oh-drop-menu`和`oh-drop-item`应该结合来用，当然你也可以使用自定义内容替换`oh-drop-item`
```vue
<oh-drop-menu title="更多操作">
	<oh-drop-item>删除</oh-drop-item>
	<oh-drop-item>编辑</oh-drop-item>
	<oh-drop-item>分享</oh-drop-item>
</oh-drop-menu>
```
:::

::: box 使用title插槽
当下拉触发元素不是单纯的文字时，可以通过`slot:title`来实现
```vue
<oh-drop-menu>
	<button slot="title">更多操作</button>
	
	<oh-drop-item>删除</oh-drop-item>
	<oh-drop-item>编辑</oh-drop-item>
	<oh-drop-item>分享</oh-drop-item>
</oh-drop-menu>
```
:::

::: box 下拉菜单使用分割线
当下拉触发元素不是单纯的文字时，可以通过`slot:title`来实现
```vue
<oh-drop-menu title="更多操作">
	<oh-drop-item divided>删除</oh-drop-item>
	<oh-drop-item divided>编辑</oh-drop-item>
	<oh-drop-item>分享</oh-drop-item>
</oh-drop-menu>
```
:::

::: box 点击菜单传参
菜单中的点击事件响应并不会有特殊的回调参数，如果菜单是通过`v-for`循环得出时，可以这样获取index
```vue
<template>
	<oh-drop-menu title="更多操作">
		<oh-drop-item v-for="(item,index) in list" :key="item" @click="() => clickItem(index)">删除</oh-drop-item>
	</oh-drop-menu>
</template>

<script>
export default {
	data() {
		return {
			list: [
				'删除',
				'编辑',
				'分享'
			]
		}
	},
	metheds: {
		clickItem(index) {
			console.log(index + '被点击')
		}
	}
}
</script>
```
:::

### API
<br/>

::: box Menu Props
|  参数   | 说明  |  类型   | 默认值  |
|  :-  | :-  |  :-   | :-  |
| title  | 下拉点击区域的文字，可通过`slot:title`代替 |  String   | - |
| max-width  | 下拉菜单`item`的最大宽度，`Number`类型时单位为`rpx`，支持uniapp中合法的样式尺寸单位 |  [Number, String]   | -  |
| disabled  | 是否禁用，设置为`true`后，点击无法触发下拉，且无法触发相应的事件 |  Boolean   | false  |
| radius  | 下拉菜单的圆角，单位`rpx` |  Number   | 12  |
| align  | 下拉菜单的对齐方式 |  String<'left','center','right'>   | 'center'  |
| close-on-click-item  | 是否在点击菜单后收起菜单 |  Boolean  | true  |
| close-on-click-mask  | 是否在点击下拉菜单外的内容时（有透明的遮罩），收起菜单 |  Boolean   | true  |
:::

::: box Item Props
|  参数   | 说明  |  类型   | 默认值  |
|  :-  | :-  |  :-   | :-  |
| divided  | 是否展示分割线（位于下方） |  Boolean   | true |
| disabled  | 是否禁止点击，设置为`true`后，菜单变灰，且无法响应点击事件 |  Boolean   | false  |
:::

::: box Menu Events
|  事件名	| 说明																			|  回调参数	|
|  :-		| :-																			|  :-		|
| open		| 展开菜单时触发																| -			|
| close		| 关闭菜单时触发																|  -		|
| click		| 点击title时触发，比`open`和`close`事件早，先触发点击，再进行下拉的展示和隐藏	|-			|
:::

::: box Item Events
|  事件名   | 说明  |  回调参数   |
|  :-  | :-  |  :-   |
| click  | 点击菜单时响应 |    |
:::

::: box Menu Slots
|  插槽名   | 说明  |  插槽参数   |
|  :-  | :-  |  :-   |
| default  | 下拉内容 |  -   |
| title  | 下拉响应的区域 |  -   |
:::

::: box Item Slots
|  插槽名   | 说明  |  插槽参数   |
|  :-  | :-  |  :-   |
| default  | 菜单内容 |  -   |
:::