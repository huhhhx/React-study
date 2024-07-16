import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

class App extends React.Component{
  state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      { id: '002', name: '睡觉', done: false },
      { id: '003', name: '玩耍', done: true },
  ]
  }
  addTodo = (todoObj)=>{
    console.log(todoObj);
    const {todos} = this.state;
    const newTodos = [todoObj,...todos];
    this.setState({todos:newTodos})
  }
  updateTodo = (id,done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todo)=>{
      if(todo.id===id) return {...todo,done:done}
      return todo
    })
    this.setState({todos:newTodos})

  }
  deleteTodo = (id)=>{
    const { todos } = this.state
    const newTodos = todos.filter((todo)=>{
     return todo.id !==id
    })
    this.setState({todos:newTodos})
  }
  checkAllTodos = (flag)=>{
    const {todos} = this.state
    const newTodos = todos.map((todo)=>{
      return {...todo,done:flag
      }
    })
    this.setState({todos:newTodos})
  }
  deleteDone = ()=>{
    const {todos} = this.state
    const newtodos = todos.filter((todo)=>{
      return todo.done === false
    })
    this.setState({todos:newtodos})

  }
  render(){
    const {todos} = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}></Header>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
          <Footer todos={todos} checkAllTodos={this.checkAllTodos} deleteDone={this.deleteDone}></Footer>
        </div>
      </div>
    )
  }

}
export default App