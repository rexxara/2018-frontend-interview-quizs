

## 安全
### 什么是 XSS CSRF 如何预防 
http://web.jobbole.com/92893/
https://zhuanlan.zhihu.com/p/30649102

## 刁钻题目

### 代码[1,2,3].map(parseInt)的返回值
```
parseInt("1",0)
1
parseInt("2",1)
NaN
parseInt("3",2)
NaN
第二个参数是进制
```
### 代码var a = {name: 'a'}  a.x = a = {}  问 a.x 是多少 
https://blog.csdn.net/mx18519142864/article/details/83111207

不太懂反正这玩意正常公司一般也不考
### (a ==1 && a== 2 && a==3) 可能为 true 吗 
可以 重写valueOf就行 因为双等号在转义的时候回调用对象的valueOf方法
```
let a={valueOf:function(){return i++}}
undefined
let i=1
undefined
a== 1 && a ==2 && a==3
true
```
## 超纲题
也不算超纲吧
### JS 垃圾回收机制
https://zhuanlan.zhihu.com/p/60279001
### Eventloop
https://www.jianshu.com/p/10714ad38f9a
## 个性化题目
PWA

echarts.js 

d3.js

three.js

flutter

SSR