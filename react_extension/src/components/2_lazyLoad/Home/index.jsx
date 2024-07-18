import React, { Component } from 'react'
import { NavLink,Route,Switch } from 'react-router-dom'
import Messages from './Messages'
import News from './News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>我是home</h1>
            <div>
                <ul className="nav nav-tabs">
                    {/* 注册路由 */}
                    <li>
                        <NavLink activeClassName='active' to='/home/news' className="list-group-item">news</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/home/messages' className="list-group-item">messages</NavLink>
                    </li>
                </ul>
                {/* react6 路由外面包裹routes */}
                <Switch>
                    {/* 注册子路由的时候要写上父路由的path值 */}
                    {/* 路由匹配是按照注册路由的顺序进行的 */}
                    <Route path='/home/news' component={News}></Route>
                    <Route path='/home/messages' component={Messages}></Route>
                </Switch>
            </div>
      </div>
    )
  }
}
