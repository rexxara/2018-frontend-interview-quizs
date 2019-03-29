##两种盒模型分别说一下。
ie盒模型和标准盒模型

在标准模型中，盒模型的宽高只是内容（content）的宽高，
而在IE模型中盒模型的宽高是内容(content)+填充(padding)+边框(border)的总宽高。
##如何垂直居中 
主要方法https://jingyan.baidu.com/article/3a2f7c2e26041a26aed61150.html
现在一般都用flex
###通过verticle-align:middle实现CSS垂直居中。
通过vertical-align:middle实现CSS垂直居中是最常使用的方法，但是有一点需要格外注意，vertical生效的前提是元素的display：inline-block。
###通过display:flex实现CSS垂直居中。
随着越来越多浏览器兼容CSS中的flexbox特性，所以现在通过“display:flex”实现CSS水平居中的方案也越来越受青睐。

通过display:flex实现CSS垂直居中的方法是给父元素display:flex;而子元素align-self:center;
（justify-content:center水平居中
这个跟CSS水平居中的原理是一样的，只是在flex-direction上有所差别，一个是row(默认值)，另外一个是column。

##BFC 是什么 
块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建块格式化上下文：

根元素或包含根元素的元素
浮动元素（元素的 float 不是 none）
绝对定位元素（元素的 position 为 absolute 或 fixed）
行内块元素（元素的 display 为 inline-block）
表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
overflow 值不为 visible 的块元素
display 值为 flow-root 的元素
contain 值为 layout、content或 strict 的元素
弹性元素（display为 flex 或 inline-flex元素的直接子元素）
网格元素（display为 grid 或 inline-grid 元素的直接子元素）
多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。
块格式化上下文包含创建它的元素内部的所有内容.

块格式化上下文对浮动定位（参见 float）与清除浮动（参见 clear）都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（Margin collapsing）也只会发生在属于同一BFC的块级元素之间。
https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context

##选择器优先级
下面列表中，选择器类型的优先级是递增的：

类型选择器（type selectors）（例如, h1）和 伪元素（pseudo-elements）（例如, ::before）
类选择器（class selectors） (例如,.example)，属性选择器（attributes selectors）（例如, [type="radio"]），伪类（pseudo-classes）（例如, :hover）
ID选择器（例如, #example）

https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity

##清除浮动说一下


 clear CSS 属性指定一个元素是否必须移动(清除浮动后)到在它之前的浮动元素下面。clear 属性适用于浮动和非浮动元素。

 当应用于非浮动块时，它将非浮动块的边框边界移动到所有相关浮动元素外边界的下方。这个非浮动块的垂直外边距会折叠。

另一方面，两个浮动元素的垂直外边距将不会折叠。当应用于浮动元素时，它将元素的外边界移动到所有相关的浮动元素外边界的下方。这会影响后面浮动元素的布局，后面的浮动元素的位置无法高于它之前的元素。

要被清除的相关浮动元素指的是在相同块级格式化上下文中的前置浮动。

子元素float布局之后需要在父元素clear float来让浮动的子元素撑起父元素
https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear