import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { UserOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { createAddPerson } from '../../redux/action/person';

 class Person extends Component {
    addPerson = ()=>{
      const name = this.name.nativeElement.value;
      const age = this.age.nativeElement.value
        const perObj = {id:nanoid(),name,age}
        this.props.addPerson(perObj)

    }
  render() {
    return (
      <div>
        <h2>我是person组件,和为{this.props.sum}</h2>
        <Input ref={c => this.name = c}  placeholder="请输入名字" style={{ width: 150 }} prefix={<UserOutlined />} />
        <Input ref={c => this.age = c} style={{ width: 150 }}  placeholder="请输入年龄" />
      
        <Button onClick={this.addPerson}>添加</Button>
        <ul>
          {
            this.props.persons.map((item)=>{
              return <li key={item.id}>名字：{item.name} -- 年龄：{item.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default connect(
  state=>({
 persons:state.persons,
 sum:state.sum
}), //映射状态
{
  addPerson: createAddPerson  // 映射操作状态的方法
})(Person)
