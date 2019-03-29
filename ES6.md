##语法知道哪些，分别怎么用 
http://es6.ruanyifeng.com/
## Promise、Promise.all、Promise.race 分别怎么用 
http://es6.ruanyifeng.com/#docs/promise
Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例
上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
上面代码中，Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）

## 手写函数防抖和函数节流
核心是用闭包隐藏变量然后返回函数
```
function debounce(fn,time){
   var isRun = false;
   function later(){
     fn();
     isRun = false;
   }
   return function(){
      if(!isRun){
         isRun = true
         setTimeout(later,time);
   }
}}

function throttle(fn,time){
    var id ;
    return function(){
            if(id) clearTimeout(id);
        id=setTimeout(fn,time);
    }
}
```
https://www.lodashjs.com/docs/4.17.5.html#throttle
https://www.lodashjs.com/docs/4.17.5.html#debounce
## 手写AJAX
现在真的还有人考这个嘛
```
<button id="ajaxButton" type="button">Make a request</button>

<script>
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'test.html');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
</script>
```
## 这段代码里的 this 是什么 
给一个经典的代码：
```
class Foo {
    print = () => {
        console.log(this.x);
    }

    constructor() {
        this.x = 1;
    }
}

let foo = new Foo();
foo.print.call({x: 2});
```
2016.05.20补：这么老的东西还有人看，为了跟上标准，再补充一个，也是唯一一个this不由调用决定的场景，即箭头函数箭头函数在设计中使用的是Lexical this，即这个函数被创建时的this就是函数内部的this需要注意的是，这个函数创建时并不是一个读代码的人肉眼能看到这个函数的时候，很多人有这样的误解，比如这样的代码：
```
function printThis() {
  let print = () => console.log(this);
  
  print();
}

printThis.call([1]);
printThis.call([2]);
```
有些人会理解都一样，输出的是Window，因为看到print函数的时候是顶级作用域。但其实print函数是在printThis被调用的时候才会被创建的，而printThis的this由外部的call决定着，所以输出自然是[1]和[2]

作者：张立理
链接：https://www.zhihu.com/question/19636194/answer/12504495
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

this的查找this的查找是很多人迷茫的一点，也似乎有很多人抱有this不稳定这样的看法，实在令人无语。this的查找可以说是3种对象查找中最为简单的，因为其实this对象的确定根本没有一个“查找”的过程。首先，this对象只会在一个函数中需要确定，如果是在全局域下，this永远为Global对象，在浏览器中通常就是window对象。而在javascript中，函数的调用一共有4种方式：Function Invocation Pattern诸如`foo()`的调用形式被称为Function Invocation Pattern，是函数最直接的使用形式，注意这里的foo是作为单独的变量出现，而不是属性。在这种模式下，foo函数体中的this永远为Global对象，在浏览器中就是window对象。Method Invocation Pattern诸如`foo.bar()`的调用形式被称为Method Invocation Pattern，注意其特点是被调用的函数作为一个对象的属性出现，必然会有“.”或者“[]”这样的关键符号。在这种模式下，bar函数体中的this永远为“.”或“[”前的那个对象，如上例中就一定是foo对象。Constructor Pattern`new foo()`这种形式的调用被称为Constructor Pattern，其关键字`new`就很能说明问题，非常容易识别。在这种模式下，foo函数内部的this永远是new foo()返回的对象。Apply Pattern`foo.call(thisObject)`和`foo.apply(thisObject)`的形式被称为Apply Pattern，使用了内置的`call`和`apply`函数。在这种模式下，`call`和`apply`的第一个参数就是foo函数体内的this，如果thisObject是`null`或`undefined`，那么会变成Global对象。应用以上4种方式，确定一个函数是使用什么样的Pattern进行调用的，就能很容易确定this是什么。另外，this是永远不会延作用域链或原型链出现一个“查找”的过程的，只会在函数调用时就完全确认。

## 闭包/立即执行函数是什么 
```
function logCreator(time){
    var count=0
    return function(){
        if(count<time){
            console.log(count)
        }else{
            console.log('do nothing')
        }
        count++
    }
}
var log3=logCreator(3)
log3()
log3()
log3()
log3()
```
立即执行函数就是(function(){return 1})() 想不通为什么要问这个。。。

## 什么是 JSONP，什么是 CORS，什么是跨域 
```
很简单，就是利用<script>标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。当需要通讯时，本站脚本创建一个<script>元素，地址指向第三方的API网址，形如：     <script src="http://www.example.net/api?param1=1&param2=2"></script>     并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。     第三方产生的响应为json数据的包装（故称之为jsonp，即json padding），形如：     callback({"name":"hax","gender":"Male"})     这样浏览器会调用callback函数，并传递解析后json对象作为参数。本站脚本可在callback函数里处理所传入的数据。    补充：“历史遗迹”的意思就是，如果在今天重新设计的话，也许就不会允许这样简单的跨域了嘿，比如可能像XHR一样按照CORS规范要求服务器发送特定的http头。

作者：贺师俊
链接：https://www.zhihu.com/question/19966531/answer/13502030
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```
CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。

整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。
跟前端没关系
跨域 同源策略
http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html
https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP

## async/await 怎么用，如何捕获异常 
需要支持 es7语法
```
async function f(){
    let res= await request()//promise
    return res
}
```
https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
错误处理
好吧这个真的学到了
```
// to.js
export default function to(promise) {
   return promise.then(data => {
      return [null, data];
   })
   .catch(err => [err]);
}

import to from './to.js';

async function asyncTask() {
     let err, user, savedTask;

     [err, user] = await to(UserModel.findById(1));
     if(!user) throw new CustomerError('No user found');

     [err, savedTask] = await to(TaskModel({userId: user.id, name: 'Demo Task'}));
     if(err) throw new CustomError('Error occurred while saving task');

    if(user.notificationsEnabled) {
       const [err] = await to(NotificationService.sendNotification(user.id, 'Task Created'));  
       if (err) console.error('Just log the error and continue flow');
    }
}
```
## 如何实现深拷贝 
JSON.stringfy() JSON.parse()

```
function deepCopy(obj) {
      var result = Array.isArray(obj) ? [] : {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') {
            result[key] = deepCopy(obj[key]);   //递归复制
          } else {
            result[key] = obj[key];
          }
        }
      }
      return result;
    }
```
https://github.com/lodash/lodash/blob/4.17.5/lodash.js#L11078

## 如何用正则实现 trim() 
```
        var str = "     你好，我      很好！      ";
        console.log(str);
        //console.log(str.trim());  //trim()方法不兼容
        console.log(trim(str));
 
		//封装兼容的trim方法
        function trim(str){
            return str.replace(/(^\s+)|(\s+$)/g,"");  //以空格开头或者以空格结尾。 g表示全局替换
        }
```
## 不用 class 如何实现继承 
```
class Parent {
    constructor(name) {
	this.name = name;
    }
    doSomething() {
	console.log('parent do something!');
    }
    sayName() {
	console.log('parent name:', this.name);
    }
}

class Child extends Parent {
    constructor(name, parentName) {
	super(parentName);
	this.name = name;
    }
    sayName() {
 	console.log('child name:', this.name);
    }
}

const child = new Child('son', 'father');
child.sayName();            // child name: son
child.doSomething();        // parent do something!

const parent = new Parent('father');
parent.sayName();           // parent name: father
```
## 用 class 又如何实现 
https://zhuanlan.zhihu.com/p/25578222
## 如何实现数组去重 
用hash啊
```
// 最简单数组去重法
/*
* 新建一新数组，遍历传入数组，值不在新数组就push进该新数组中
* IE8以下不支持数组的indexOf方法
* */
function uniq(array){
    var temp = []; //一个新的临时数组
    for(var i = 0; i < array.length; i++){
        if(temp.indexOf(array[i]) == -1){
            temp.push(array[i]);
        }
    }
    return temp;
}

var aa = [1,2,2,4,9,6,7,5,2,3,5,6,5];
console.log(uniq(aa));
```
```
/*
* 速度最快， 占空间最多（空间换时间）
*
* 该方法执行的速度比其他任何方法都快， 就是占用的内存大一些。
* 现思路：新建一js对象以及新数组，遍历传入数组时，判断值是否为js对象的键，
* 不是的话给对象新增该键并放入新数组。
* 注意点：判断是否为js对象键时，会自动对传入的键执行“toString()”，
* 不同的键可能会被误认为一样，例如n[val]-- n[1]、n["1"]；
* 解决上述问题还是得调用“indexOf”。*/
function uniq(array){
    var temp = {}, r = [], len = array.length, val, type;
    for (var i = 0; i < len; i++) {
        val = array[i];
        type = typeof val;
        if (!temp[val]) {
            temp[val] = [type];
            r.push(val);
        } else if (temp[val].indexOf(type) < 0) {
            temp[val].push(type);
            r.push(val);
        }
    }
    return r;
}

var aa = [1,2,"2",4,9,"a","a",2,3,5,6,5];
console.log(uniq(aa));
```
https://www.cnblogs.com/baiyangyuanzi/p/6726258.html
## == 相关题目（反着答）
严格相等和逻辑相等
逻辑相等会转义
一般会用eslint禁用掉不让写==

## 送命题 手写一个 Promise
https://www.jianshu.com/p/dc98103a1e04
这个一般可以放弃 哪有这么叼难人的
去搜索promise的polyfill吧

promise的话 有个很难的
```
function xiaoming(params) {
  if (!(this instanceof xiaoming)) {
    return new xiaoming();
  }
  this.tasks = [];
  this.name='xiaoming'
}

let taskify = function(func) {
  return function(...args) {
    let lastTask = this.tasks[0] ? this.tasks.shift() : Promise.resolve();
    this.tasks.push(lastTask.then(func.bind(this, ...args)));
    return this;
  };
};

xiaoming.prototype.eat = taskify(function(thing) {
  console.log(`${this.name} eats ${thing}`);
});

xiaoming.prototype.sleep = taskify(function(n) {
  console.log('sleep')
  return new Promise(resolve => setTimeout(resolve, n))
});

xiaoming().eat('apple').sleep(2000).eat('dick')
```