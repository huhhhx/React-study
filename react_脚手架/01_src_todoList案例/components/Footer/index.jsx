import React, { Component } from 'react'
import './css/index.css'

export default class Footer extends Component {
  handleChange = (event)=>{
    this.props.checkAllTodos(event.target.checked)
  }
  handleDeleteDone = ()=>{
    this.props.deleteDone()
  }
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,todo)=>{
       return pre + (todo.done?1:0)
    },0)

    return (
      <div className='todo-footer'>
        <div> <input type="checkbox" onChange={this.handleChange} checked={doneCount ===todos.length?true:false}/>  已完成{doneCount}/全部{todos.length}</div>
        <button className='btn' onClick={this.handleDeleteDone}> 清除已完成的任务</button>
      </div>
    )
  }
}
