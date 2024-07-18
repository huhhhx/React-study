import React, { Component } from 'react'
// 解析search 参数
// import qs from "querystringify"

export default class Detail extends Component {
  render() {
    console.log(this.props)
    // 接收params 参数
    const {id,title} = this.props.match.params

    // 接收search参数 urlencoded
    // const {search} = this.props.location
    // // 截取掉问号
    // const {id,title} = qs.parse(search.slice(1))

    // 接收state 参数
    // const {id,title} = this.props.location.state


    return (
      <div>
        <ul>
            <li>
                id:{id}
            </li>
            <li>
                tittle:{title}
            </li>
        </ul>
      </div>
    )
  }
}
