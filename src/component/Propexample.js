import React, { Component } from 'react'
import propTypes from 'prop-types'
import './component.css'
export class Propexample extends Component {
  render() {
    return (
      <div>
        <div>
        <h1>Propexample</h1>
        <p>First Name : {this.props.fname}</p>
        <p>Last Name : {this.props.lname}</p>
      </div>
      <div>
        <h1>Default Props Example</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>Name</td>
                <td>{this.props.name}</td>
            </tr>
            <tr>
                <td>Array</td>
                <td>{this.props.mark}</td>
            </tr>
            <tr>
                <td>Number</td>
                <td>{this.props.totalmark}</td>
            </tr>
            <tr>
                <td>Boolean</td>
                <td>{this.props.result?"pass":"fail"}</td>
            </tr>
            <tr>
                <td>Function</td>
                <td>{this.props.cube(4)}</td>
            </tr>
        </table>
      </div>
      </div>
    )
  }
}

Propexample.propTypes ={
    num:propTypes.string.isRequired,
    mark : propTypes.array,
    totalmark:propTypes.number,
    result:propTypes.bool,
    cube:propTypes.func,
}
Propexample.defaultProps={
    name:"Dinesh",
    mark:[97,98,99,100],
    totalmark:494,
    result:true,
    cube:function cube(x) {
        return x*x*x;
    }
}
export default Propexample