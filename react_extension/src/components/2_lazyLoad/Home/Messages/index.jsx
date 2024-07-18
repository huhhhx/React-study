import React, { Component } from 'react'
import {Button} from 'antd'
import { Link ,Route,Switch} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state={
    megs: [{ id: '01', title: 'detail1' },
      { id: '02', title: 'detail2' },
      { id: '03', title: 'detail3' }]
  }
  pushShow = (id,title)=>{
    // push跳转 携带params参数
    this.props.history.push(`/home/messages/detail/${id}/${title}`)

    // push跳转 携带search参数

  }
  replaceShow = (id,title)=>{
    // replace跳转 携带params参数
    this.props.history.replace(`/home/messages/detail/${id}/${title}`)

  }
  render() {
    const {megs} = this.state
    return (
      <div>
        <ul>
          {
            megs.map((item)=>{
              return (
               <li key={item.id}>
                  {/* 路由传参 params */}
                  <Link to={`/home/messages/detail/${item.id}/${item.title}`}>{item.title}</Link>
                 
                  {/* 向路由传递search参数 */}
                  {/* <Link to={`/home/messages/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                  {/*  向路由组件传递state参数*/}
                  {/* 路由跳转默认开启push模式，会压栈  可设置为replace模式，会替换*/}
                  {/* <Link to={{pathname:'/home/messages/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link> */}

                  <button onClick={()=>this.pushShow(item.id,item.title)}>push</button>
                  <Button type="primary" size="small" onClick={() => this.replaceShow(item.id, item.title)}>replace</Button>
               </li>
              )
            })
          }
        </ul>
        <Switch>
          {/* 声明接收params参数 */}
          <Route path='/home/messages/detail/:id/:title' component={Detail}></Route>

          {/* search 参数  无需声明接收,正常注册路由即可*/}
          {/* <Route path="/home/messages/detail" component={Detail}></Route> */}

          {/* state 参数  无需声明接收,正常注册路由即可*/}
          {/* <Route path="/home/messages/detail" component={Detail}></Route> */}

        </Switch>

      </div>
    )
  }
}
