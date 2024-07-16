import React, { Component } from 'react'
import { Select, Button, Space } from 'antd'
import store from '../../redux/store'
// 引入 action
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'

export default class Count extends Component {
  state ={
    options:[
        {value:1},
        {value:2},
        {value:3}
    ],
    value:'1'
  }
// 复用不好
//   componentDidMount(){
//     // 检测redux中状态的变化，只要变化，就调用render
//     store.subscribe(()=>{
//         this.setState({})
//     })
//   }
   handleChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({value:value})
    };
    // 加法
    handleIncrement = ()=>{
        const {value} = this.state
        store.dispatch(createIncrementAction(value*1))
    }
    // 减法
    handleDecrement = ()=>{
        const { value } = this.state
        store.dispatch(createDecrementAction(value*1))
    }
    // 奇数再加
    handleIncrementIfOdd = ()=>{
        const { value } = this.state
        const sum = store.getState();
        if(sum % 2 !==0){
            store.dispatch(createIncrementAction(value*1))
        }
    }
    // 异步加
    handleIncrementAsync = ()=>{
        const { value } = this.state
        store.dispatch(createIncrementAsyncAction(value * 1,500))
    }
  render() {
    return (
      <div>
        <h1>当前和为：{store.getState()}</h1>
        <Select defaultValue={this.state.value} style={{width:120}} onChange={this.handleChange} options={this.state.options}>
        </Select>&nbsp;
            <Space >
                <Button onClick ={this.handleIncrement}>+</Button>
                <Button onClick={this.handleDecrement}>-</Button>
                <Button onClick={this.handleIncrementIfOdd}>和为奇数就加</Button>
                <Button onClick={this.handleIncrementAsync}>异步加</Button>
            </Space>

      </div>
    )
  }
}
 