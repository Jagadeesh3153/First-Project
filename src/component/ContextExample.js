import React, { Component } from 'react'
import ContextData from '../ContextStore'

class ContextExample extends Component {
  static contextType = ContextData;
  render() {
    return (
      <div>
        <h1>ContextExample</h1>
        <p>{this.content}</p>
      </div>
    )
  }
}

export default ContextExample