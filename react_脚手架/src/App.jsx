import React, { Component } from 'react'
import Count from './containers/add'
import Person from './containers/person'

export default class App extends Component {
 
  render() {
    return (
      <div>
      <Count ></Count>
      <hr />
      <Person></Person>
      </div>
    )
  }
}