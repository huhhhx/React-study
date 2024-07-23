import React, { Component } from 'react'

// 如何向组件内部动态传入带内容的结构（标签）？
// 使用children props :通过组件标签体传入结构
// 使用xx props: 通过组件标签属性传入结构
export default class Demo extends Component {
  render() {
    return (
      <div>
        <h3> 我是parent组件</h3>
        {/* 父组件中动态传入子组件，通过props传入函数（还可传递参数），函数返回值为子组件 */}
        <A update={(name)=><B name={name}></B>}></A>
      </div>
    )
  }
}
class A  extends Component {
    state = {
        name:'tom'
    }
    render(){
        const name = this.state.name
        return (
            <div>
                <h3>我是组件A</h3>
                {/* 这里可以带上这个组件想要传递的参数 */}
                {/* 这里是一个占位，函数返回的组件旧放在这个组件的这个位置 */}
                {/* 类似于vue中的插槽 */}
                {this.props.update(name)}
            </div>
        )
    }
}

class B extends Component {
   
    render() {
        return (
            <div>
                <h3>我是组件B</h3>
                {/* 还是可以通过props获取父组件传递过来的值 */}
                {this.props.name}
            </div>
        )
    }
}