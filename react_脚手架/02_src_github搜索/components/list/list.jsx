import React, { Component } from 'react'
import Item from '../Item/item'

export default class List extends Component {
    render() {
        const { users ,isFirst,isLoading,err} = this.props
        return (
            isFirst ? <h2>欢迎使用，请输入关键字搜索</h2>:
            isLoading ? <h2>Loding...</h2>:
            err ? <h2>{err}</h2> :
            users.map((user) => {
                return <Item {...user} key={user.id}/>
            })
        )
    }
}