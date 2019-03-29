##watch 和 computed 和 methods 区别是什么 
###先说下computed属性和methods区别

computed是响应式的，methods并非响应式。
调用方式不一样，computed定义的成员像属性一样访问，methods定义的成员必须以函数形式调用。
computed是带缓存的，只有其引用的响应式属性发生改变时才会重新计算，而methods里的函数在每次调用时都要执行。
computed中的成员可以只定义一个函数作为只读属性，也可以定义get/set变成可读写属性，这点是methods中的成员做不到的
比如：我们想去时刻监控数据的变化，在视图上显示不同的结果，当然这两中方法都可以实现这种效果，这个时候用computed就比较合理了，因为computed是可缓存的，只要数据层值不改变，computed就不会去改变，而且可缓存，如果数据层的值变了，computed就会实时更新到视图层上，所以说computed是响应式的。

###computed属性和watch区别

computed里属性名是自定义的，它可以监听一个或多个它所依赖的数据项；而watch一次只能监听一个属性，这个属性函数接收两个参数，一个是新值一个是旧值。
computed里自定义的属性不能与data里的属性重复，否则会报错；而watch里监听的属性必须是已存在的，其要么是data里的属性，要么是computed里计算出来的属性。
watch是允许异步操作的（访问一个API），并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
我们在不知道用什么时，基本上用computed是没什么问题的。

##Vue 有哪些生命周期钩子函数 
https://zhuanlan.zhihu.com/p/45056082
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeDestroy
destroyed 
##Vue 如何实现组件间通信 
vueX呗参见react
##Vue 数据响应式怎么做到的 
使用proxy 重载对象的getter和setter方法
##Vue.set 是做什么用的 
新增数据 新增的还是响应式的
##Vuex 你怎么用的 
就跟redux那样用呗
##VueRouter 你怎么用的 
https://router.vuejs.org/zh/guide/#html
##路由守卫是什么 

就这 在路由跳转前后座处理的hook函数
router.beforeEach((to, from, next) => {
  console.log('navigation-guards');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
  let isLogin = global.isLogin;  // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {  
    if (!isLogin) {
      console.log('what fuck');
      router.push({ name: 'login' })
    }
  }
  // 已登录状态；当路由到login时，跳转至home 
  if (to.name === 'login') {
    if (isLogin) {
      router.push({ name: 'home' });
    }
  }
  next();
});

