import React, { Component } from 'react'
import Child from './Child'

export default class Demo extends Component {
    state = {
        hasError:'' //用于标识子组件是否产生错误
    }
    // 子组件发生任何错误的时候，都会调用这个勾子,并携带错误信息=>只适用于开发环境，且只能捕获后代生命周期里面发生的错误
    static getDerivedStateFromError(error) {
        return {hasError:error}
    }
  render() {
    return (
      <div>
        <h2>我是父组件</h2>
        {this.state.hasError ? <h2>请稍后再试</h2> : <Child></Child>}
      </div>
    )
  }
}
