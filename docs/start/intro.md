# 介绍

::: box 介绍
:tada: 在前端的每一个时代，ui库从不会缺：
- Jquery时代有Boostrap这样的顶级框架
- Vue、React等各自有着团队维护的开源顶级框架：element-ui、ant-design、vant等
- uniapp目前整套的框架不多，但也有着uview这样由团队维护顶级框架
- ...... 微信小程序等前端技术同理

---
:no_entry_sign: :warning: 尽管各种ui库已经足够满足日常的简单开发，但在实际项目开发中，我们仍需要封装大量组件，其中也包括一些基础组件：  

element-ui中封装了 [el-image](https://element.eleme.cn/#/zh-CN/component/image) 组件，
该组件提供了图片错误占位图、懒加载、图片预览等功能，而在ant-design中，并不存在这样的组件！

与此雷同的还有其他组件，这就导致了我在采用element项目中不需要封装的组件，在另一个采用ant-design开发的项目中，我还需要重新封装一次！

---

:fire: :fire: :fire: 

**那这样的差异我们该怎么抹平呢？**

这就是 `oh-ui` 的由来：一套不包含基础组件的ui库。

类似上面提出的问题，在采用ant-design的项目中，再引入element-ui会很奇怪，即使是按需导入element-ui的image组件，也很奇怪，因为element-ui是一整ui框架，有着自己风格和体系。

而导入oh-ui则不会有这样的烦恼，因为oh-ui的目的就是抹平各种ui库的差异，组件之间没有特定的风格或者关联，需要什么组件就导入什么组件。

---
显然，一个框架的维护成本极高，这样的工作更适合交给大厂团队，这些年见证过太多个人维护的ui走向灭亡。

目前oh-ui完全由我自己开发维护，最开始的目的是把自己用到过的，ui组件库中却没有提供、或者定制效果不理想的组件都封装收集起来，这样就避免了多个项目开发时，重复去封装这部分组件。

:fire: 由于个人精力有限，兼容性测试可能并不完善，我在组件文档中尽可能描述详尽，包括使用到的一些api、实现原理等等，以便大家判断组件的兼容性、性能等等。

:::

::: box 兼容性
当前浏览的文档为：`oh-ui-uniapp` ，该组件库只适用于uniapp多端开发

| Android		| IOS			| 微信小程序|  H5	| 其他小程序|
| -------------	|:-------------:| -----:	|-----:	|-----:		|
| 兼容			| 兼容			|兼容		|兼容	|未检测		|
:::

::: box 预览
<img src="/h5.png" width="200px">
:::

::: box 链接
uniapp插件地址：未上传

项目github：未上传

项目npm地址：[oh-ui-uniapp](https://www.npmjs.com/package/oh-ui-uniapp)

作者博客网站：[六月迎风](http://www.landejin.cn)

作者github：[landejin](https://github.com/landejin)

:::

::: box 开源协议
`oh-ui-uniapp`遵循[MIT](https://baike.baidu.com/item/MIT/10772952)开源协议，意味着您无需支付任何费用，也无需授权，即可将`oh-ui-uniapp`应用到您的产品中。

但并不意味着您可以将`oh-ui-uniapp`应用到非法的领域。如因此产生纠纷或法律问题，本人不承担任何责任。
:::

::: box 捐赠
开发和维护一个UI框架是一项庞大的工作，尤其是要多端适配，oh-ui-uniapp在日常帮助到了我自己，我也希望可以帮助到你，有什么问题都可以提出，有时间一定会尽力修复。

不爱别伤害，那些用着别人的代码，还嫌弃别人写的垃圾的，建议不要使用本库。

<img src="/wechat_pay.jpg" width="160px" style="margin-right:10px">
<img src="/alipay.jpg" width="160px">

如果该组件对你有用，可以通过二维码进行低额打赏，为技术干杯! :beer: :beer: :beer:
:::