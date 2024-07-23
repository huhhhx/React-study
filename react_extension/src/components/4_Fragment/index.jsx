import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
        // 不渲染在页面
        <Fragment>
            <input type="text" />
        </Fragment>
    )
  }
}
