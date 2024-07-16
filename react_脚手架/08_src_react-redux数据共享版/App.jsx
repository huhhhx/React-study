import React, { Component } from 'react'
import Count from './containers/add'
import store from './redux/store'
import Person from './containers/person'

export default class App extends Component {
 
  render() {
    return (
      <div>
      <Count store = {store}></Count>
      <hr />
      <Person></Person>
      </div>
    )
  }
}