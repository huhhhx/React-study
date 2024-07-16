import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './css/index.css'

export default class Header extends Component {
  handleKeyUp = (event)=>{
    if(event.keyCode !==13) return ;
    const todo = {
      id:nanoid(),
      name:event.target.value,
      done:false
    }
    if(event.target.value.trim() === ''){
      alert('输入不能为空')
      return 
    }
    this.props.addTodo(todo)
    event.target.value = ''
  }
  render() {
    return (
      <div className='todo-header'>
        <input className='input' onKeyUp={this.handleKeyUp} type="text"  placeholder=' 请输入你的任务名称，按回车键确认'/>
      </div>
    )
  }
}
