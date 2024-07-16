
import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  

    search = () => {
        const baseUrl = '/api'
        const value = this.keyWordElem.value
        const { upDateAppState } = this.props
        upDateAppState({isFirst:false,isLoading:true})
        axios.get(baseUrl +`/search/users?q=${value}`).then((res)=>{
            console.log('成功了',res.data)
            upDateAppState({isLoading:false,users:res.data.items })
        },(err)=>{
            upDateAppState({ isLoading: false, err:' 请求出错' })
        })
           
    }

    render() {

        return (
            <div>
                <input type="text" placeholder="请输入关键字" ref={c=>this.keyWordElem = c} />&nbsp;
                <button onClick={this.search}>搜素</button>
            </div>
        )
    }
}
