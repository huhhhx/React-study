import React, { Component } from 'react'
import Search from './components/search/search'
import List from './components/list/list'

export default class App extends Component {
  state = {
    users: [],
    isFirst:true, // 是否为第一次打开页面
    isLoading:false, // 标识是否处于加载中
    err:''// 存储错误信息

  }
  upDateAppState = (newState)=>{
     this.setState(newState)
  }
  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索github用户</h3>
          {/* search组件 */}
          <Search upDateAppState={this.upDateAppState}/>
        </section>
        {/* list组件 */}
        <List  {...this.state}/>
      </div>
    )
  }
}