
## 受控组件 V.S. 非受控组件
https://www.cnblogs.com/qingguo/p/5857923.html
input 的refs
## React 有哪些生命周期函数 分别有什么用 （Ajax 请求放在哪个阶段 ）
didMount 不过react生命周期变了（hook）
## React 如何实现组件间通信 
redux啊 还有父组件子组件handle
## shouldComponentUpdate 有什么用 
通过手动对比state和props的变化来减少render调用
## 虚拟 DOM 是什么 
跟dom树对比提高性能的
## 什么是高阶组件 
传入组件返回组件的东西
类似于高阶函数
## React diff 的原理是什么 
只对比同级元素所以时间复杂度n
## Redux 是什么 
单向数据流
## connect 的原理是什么 
在原应用组件上包裹一层，使原来整个应用成为Provider的子组件
接收Redux的store作为props，通过context对象传递给子孙组件上的connect
```
export default function connect(mapStateToProps, mapDispatchToProps, mergeProps, options = {}) {
  return function wrapWithConnect(WrappedComponent) {
    class Connect extends Component {
      constructor(props, context) {
        // 从祖先Component处获得store
        this.store = props.store || context.store
        this.stateProps = computeStateProps(this.store, props)
        this.dispatchProps = computeDispatchProps(this.store, props)
        this.state = { storeState: null }
        // 对stateProps、dispatchProps、parentProps进行合并
        this.updateState()
      }
      shouldComponentUpdate(nextProps, nextState) {
        // 进行判断，当数据发生改变时，Component重新渲染
        if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
          this.updateState(nextProps)
            return true
          }
        }
        componentDidMount() {
          // 改变Component的state
          this.store.subscribe(() = {
            this.setState({
              storeState: this.store.getState()
            })
          })
        }
        render() {
          // 生成包裹组件Connect
          return (
            <WrappedComponent {...this.nextState} />
          )
        }
      }
      Connect.contextTypes = {
        store: storeShape
      }
      return Connect;
    }
  }
```
https://www.jianshu.com/p/9873d4ccb891