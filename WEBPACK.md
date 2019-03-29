
## 有哪些常见 loader 和 plugin，你用过哪些 
https://www.jianshu.com/p/485e2d7f4303

### sass-loader 
用于解析.scss文件

但是这玩意又不能解析.scss文件里的require('./images/xxx.png') 

所以要有

### resolve-url-loader 
好现在我们把.scss文件编译成css了 但是
webpack不认css所以要有
### css-loader
好了  我们现在处理好css了
但是css没被引入html
### style-loader
把它引入html里
### file-loader
为了能在js里require 图片文件
### extract-text-webpack-plugin

该插件是用来把项目中使用的 CSS 抽离到单独文件，并以```<link href="xxx" />```的形#式引入，以减少 JS 文件体积。

html-webpack-plugin

该插件用于通过制定源 HTML 文件生成编译后的 HTML。编译后的 HTML 自动引入编译后的 JS、CSS。该插件不像 extract-text-plugin，不需要依赖 loader（其实大部分的 plugin 都不需要依赖 loader）

## loader 和 plugin 的区别是什么 
webpack中loader和plugin这两个概念很容易为初学者混淆，在这里，我简单谈谈自己的理解。

### 对于loader
它就是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss或A.less转变为B.css，单纯的文件转换过程；

### 对于plugin
它就是一个扩展器，它丰富了wepack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，例如

- run：开始编译
- make：从entry开始递归分析依赖并对依赖进行build
- build-moodule：使用loader加载文件并build模块
- normal-module-loader：对loader加载的文件用acorn编译，生成抽象语法树AST
- program：开始对AST进行遍历，当遇到require时触发call require事件
- seal：所有依赖build完成，开始对chunk进行优化（抽取公共模块、加hash等）
- optimize-chunk-assets：压缩代码
- emit：把各个chunk输出到结果文件
通过对节点的监听，从而找到合适的节点对文件做适当的处理。
## 如何按需加载代码 
require ensure
## 如何提高构建速度 
https://www.cnblogs.com/imwtr/p/7801973.html

开发的时候大多都是增量更新问题不大

开发和生产使用不同的webpack配置

比如开发就别uglyfy了

## 转义出的文件过大怎么办 
https://www.cnblogs.com/vvjiang/p/9327903.html
这个忒强了

上面五题请看这个不错的参考：https://zhuanlan.zhihu.com/p/
44438844
