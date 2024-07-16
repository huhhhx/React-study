import React, { Component } from 'react'
import './css/index.css'

export default class Item extends Component {

  state = {mouse:false}

  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})

    }
  }
  handleChange = (id)=>{
     return (event)=>{
       this.props.updateTodo(id,event.target.checked)
     }
  }
  handleDelete = (id)=>{
    if(window.confirm('确认删除吗?')){
      this.props.deleteTodo(id);
    }
  }
  render() {
    const {id,name,done} = this.props.item
    const {mouse} = this.state
    return (
      <div style={{background:mouse ? '#ddd':'white'}} className='item' onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <div><input type="checkbox" checked={done} className='check' onChange={this.handleChange(id,)}/>  {name}</div>
        <button style={{ display: mouse ? 'block' : 'none' }} onClick={() => { this.handleDelete(id) }}>删除</button>
      </div>
    )
  }
}
