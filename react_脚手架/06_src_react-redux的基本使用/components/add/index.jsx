import React, { Component } from 'react'
import { Select, Button, Space } from 'antd'
import { number } from 'prop-types';

export default class Count extends Component {
  state ={
    options:[
        {value:1},
        {value:2},
        {value:3}
    ],
    value:'1'
  }

   handleChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({value:value})
    };
    // 加法
    handleIncrement = ()=>{
        const {value} = this.state
        this.props.jia(value*1)
    }
    // 减法
    handleDecrement = ()=>{
        const { value } = this.state
        this.props.jian(value*1)
    }
    // 奇数再加
    handleIncrementIfOdd = ()=>{
        const { value } = this.state
        if(this.props.count % 2 !==0){
            this.props.jia(value *1)
        }
    }
    // 异步加
    handleIncrementAsync = ()=>{
        const { value } = this.state
        this.props.jianAsync(value*1,500)
    }
  render() {
    return (
      <div>
        <h1>当前和为：{this.props.count}</h1>
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
 