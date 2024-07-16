import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './css/index.css'

export default class Main extends Component {

    // 对接收的props进行：类型、必要性的限制
    static propTypes ={
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired
    }
  render() {
      const { todos, updateTodo, deleteTodo } = this.props

    return (
      <div className='todo-main'>
            {
                todos.map((item)=>{
                    return <Item key={item.id} item={item} updateTodo={updateTodo} deleteTodo={deleteTodo }/>
                })
            }
      </div>
    )
  }
}
