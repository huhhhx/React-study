import React, { Component } from 'react'

export default class Demo extends Component {
    state = {count:0}
    add = ()=>{
        const {count} = this.state
        // 对象式
        // this.setState({count:count+1},()=>{
        //     // 此回调课获取更新后的数据
        // })

        // 函数式
        this.setState((state,props)=>{
            return ({count:state.count+1})
        },()=>{})

    }
  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.add}> add</button>
      </div>
    )
  }
}
