# Icon 图标

::: box 说明
基于字体的图标集，精选绝大多数常见场景的图标，统一精致实用。
:::

### 代码演示
<br/>

::: box 基本使用
通过`<oh-icon>`形式来调用，name参数为对应图标名

``` html
<oh-icon name="share-line"></oh-icon>
```
:::

::: box 修改图标颜色和尺寸
`color` 属性设置图标颜色，属性值只要符合css颜色值即可  
`size` 属性设置图标大小，支持纯数字以及uniapp中其他合法的样式单位，纯数字时，采用`rpx`单位

```html
<oh-icon name="share-line" :size="40" color="red"></oh-icon>
```
:::

### API
<br/>

::: box  Props
|  参数   | 说明  |  类型   | 默认值  |
|  :-  | :-  |  :-   | :-  |
| name  | 图标名称，见右侧图标列表 |  String   | -  |
| color  | 图标颜色，符合css颜色值 |  String   | -  |
| size  | 图标大小，纯数字时单位为rpx，允许传入uniapp中其他合法的样式单位 |  [Number,String]   | 28  |
:::

::: box  Events
|  事件名   | 说明  |  回调参数   |
|  :-  | :-  |  :-   |
| click  | 图标点击时触发 |  -   |
:::