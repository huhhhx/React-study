import React, { Component } from 'react'

// 创建 Context 对象  嵌套组件共用状态
const MyContext = React.createContext()
const {Provider,Consumer} = MyContext
export default class Demo extends Component {
    state = {
        name:"兔子"
    }
  render() {
    const name = this.state.name
    return (
      <div>
        <h3>我是A</h3>
        <h4>我的用户名是：{name}</h4>
        <Provider value={name}>
          <B></B>
        </Provider>
      </div>
    )
  }
}
class B extends Component {
    render() {
        return (
            <div>
                <h3>我是B</h3>
                <C></C>
            </div>
        )
    }
}
// 类式组件接收context
// class C extends Component{
//     // 声明接收context
//     static contextType = MyContext
//     // this.context 可传过来一个对象
//     render(){
//         return (
//             <div>
//                 <h3>我是C</h3>
//                 <h4>我的用户名是：{this.context}</h4>
//             </div>
//         )
//     }
// }

// 函数式组件接收context
function C(){
    return (
        <div>
            <h3>我是C</h3>
            <h4>我的用户名是：
                <Consumer>
                    {
                        value=>{
                            console.log(value)
                            return `${value}`
                        }
                    }
                </Consumer>
            
            </h4>
        </div>
    )
}
