# 拖拽容器
::: box 组件说明
这是一个容器组件，自身实现了自由拖拽和吸附到左右两侧的逻辑，不包含任何元素展示，可以通过slot插槽来实现拖拽内容的展现。

> 右侧案例是通过`<iframe>`引入，可能无法呈现拖动效果，建议直接访问网址演示案例：[拖拽容器](http://www.landejin.cn/oh-ui-uniapp#/pages/components/drag-container)
:::

### 代码演示
<br/>

::: box 基本使用
拖拽容器默认无内容，只提供拖拽和吸附功能，具体呈现内容以及点击事件，应该通过slot插槽来实现。  
组件默认允许拖拽和吸附到左右两侧，当组件拖拽并且松手时，会判断组件左右半屏位置，自动吸附到左右两侧。
```vue
<template>
	<oh-drag-container>
		<view class="container" @click="clickContent">
			拖拽内容
		</view>
	</oh-drag-container>
</template>

<script>
export default {
	metheds: {
		clickContent() {
			console.log('内容被点击')
		}
	}
}
</script>
```
:::

::: box 禁止吸附到左侧
组件默认根据拖拽结束位置，吸附到左右两侧，可以通过`sticky-left`属性禁止吸附到左侧。
```vue
<template>
	<oh-drag-container :sticky-left="false">
		<view class="container">
			拖拽内容
		</view>
	</oh-drag-container>
</template>
```
:::

::: box 禁止吸附
设置`sticky`为`false`后，组件仍可以自由拖拽，拖拽结束后停留在结束的位置，不会吸附到左右两侧，同时`sticky-left`属性的设置也将失去意义。
```vue
<template>
	<oh-drag-container :sticky="false">
		<view class="container">
			拖拽内容
		</view>
	</oh-drag-container>
</template>
```
:::

::: box 禁止拖拽
设置`disabled`为`ture`后，组件不再可以自由拖拽和吸附，只能固定在初始位置。
```vue
<template>
	<oh-drag-container :disabled="true">
		<view class="container">
			拖拽内容
		</view>
	</oh-drag-container>
</template>
```
:::

::: box 设置组件初始化距离顶部的距离
通过设置`start-top`，调整初始化距离顶部的位置，支持数字（rpx单位）、以及字符串（uniapp中合法的css尺寸单位）
```vue
<template>
	<oh-drag-container :start-top="600">
		<view class="container">
			拖拽内容
		</view>
	</oh-drag-container>
</template>
```
:::



### API
<br/>

::: box Props
|  参数   | 说明  |  类型   | 默认值  |
|  :-  | :-  |  :-   | :-  |
| sticky  | 是否启用吸附，设置为`false`时，组件处于自由拖拽状态 |  Boolean   | true |
| sticky-left  | 是否允许组件吸附到左侧，`sticky=true`时有效；组件会判断拖拽放手后的位置，如果处于左半屏幕将会吸附到左侧 |  Boolean   | true  |
| disabled  | 是否禁止拖动，设置为`true`后，组件固定悬浮在页面上，无法进行拖拽 |  Boolean   | false  |
| z-index  | 组件的`fixed`定位层级 |  Number   | 99999  |
| startTop  | 组件初始化距离顶部的位置，`Number`类型时单位为`rpx`，支持uniapp中合法的样式尺寸单位 |  [String,Number]   | '50%'  |
:::

::: box Events
|  事件名   | 说明  |  回调参数   |
|  :-  | :-  |  :-   |
| start  | 拖拽开启时触发 |  x：拖拽开始时pageX值，单位px；y:拖拽开始时pageY值，单位px   |
| end  | 拖拽结束时触发 |  x：组件距离拖拽初始位置的x轴距离，单位px；y:组件距离拖拽初始位置的y轴距离，单位px  |
:::

::: box Slots
|  插槽名   | 说明  |  插槽参数   |
|  :-  | :-  |  :-   |
| default  | 拖拽的内容 |  -   |
:::