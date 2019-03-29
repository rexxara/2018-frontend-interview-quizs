##你是如何理解 HTML 语义化的

语义化，指对文本内容的结构化（内容语义化），选择合乎语义的标签（代码语义化），便于开发者阅读，维护和写出更优雅的代码的同时，让浏览器的爬虫和辅助技术更好的解析。

`<header>`

定义文章的介绍信息：标题，logo，slogan；包裹目录部分，搜索框，一个nav或者任何相关的logo；
一个页面中`<header>`的个数没有限制，可以为每个内容块添加一个header；
`<nav>`

定义文章导航栏，链接等;
nav一般和u、li配合做导航栏；
`<main>`

定义文章的主要内容
main标签在一份文档中是唯一的，其后代元素常常包括`<article>`；
`<article>`

定义文档中可以脱离其他部分，一份独立的内容，通常带有标题，当article内嵌article时，里外层的内容应该是相关的，比如一篇微博和它的评论；
`<section>`

与article的差别在于，它是整体的一部分，或者是文章的一节，一般来说section也会带有标题；
`<aside>`

侧边栏（与article并列存在）或者嵌入内容（在article内），通常认为是独立拆分出来而不受整体影响的一部分，作为主要内容的附属信息，如索引，词条列表，或者页面及站点的附属信息，如广告，作者资料介绍等；
`<footer>`

页脚，通常包含作者、版权信息或者相关链接等；

##_metaviewport是做什么用的怎么写

定义和用法
`<meta>` 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。

`<meta>` 标签位于文档的头部，不包含任何内容。`<meta>` 标签的属性定义了与文档相关联的名称/值对。

viewport 是针对适配移动端页面的属性
其实刚接触网页的时候都知道meta标签的重要性，其他属性可以不写，但编码申明不可不写

但在H5移动设备的网站中，都可以看到有那么一大串的meta标签。

`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">`
（当设置user-scalable=0之后 可以解决移动端点击300ms延迟问题）
Viewport ：字面意思为视图窗口，在移动web开发中使用。表示将设备浏览器宽度虚拟成一个特定的值（或计算得出），这样利于移动web站点跨设备显示效果基本一致。移动版的 Safari 浏览器最新引进了 viewport 这个 meta tag，让网页开发者来控制 viewport 的大小和缩放，其他手机浏览器也基本支持。

在移动端浏览器当中，存在着两种视口，一种是可见视口（也就是我们说的设备大小），另一种是视窗视口（网页的宽度是多少）。举个例子：如果我们的屏幕是320像素*480像素的大小（iPhone4），假设在浏览器中，320像素的屏幕宽度能够展示980像素宽度的内容。那么320像素的宽度就是可见视口的宽度，而能够显示的980像素的宽度就是视窗视口的宽度。

为了显示更多的内容，大多数的浏览器会把自己的视窗视口扩大，简易的理解，就是让原本320像素的屏幕宽度能够容下980像素甚至更宽的内容（将网页等比例缩小）。

Viewport 属性值

width	设置layout viewport 的宽度，为一个正整数，或字符串"width-device"

initial-scale	设置页面的初始缩放值，为一个数字，可以带小数

minimum-scale	允许用户的最小缩放值，为一个数字，可以带小数

maximum-scale	允许用户的最大缩放值，为一个数字，可以带小数

height	设置layout viewport 的高度，这个属性对我们并不重要，很少使用

user-scalable	是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许

常见viewport数值

iPhone：980

iPad：1024

Android：980

WinPhone：1024

##H5是什么
HTML5 是下一代的 HTML。
新入坑的前端写的实际上就是html5 没什么好说的
在移动端开发来说，通常html5就是web开发，外行这么叫。
http://www.w3school.com.cn/html5/html5_reference.asp

##DOM

必考：事件委托

曾考：用 mouse 事件写一个可拖曳的 div