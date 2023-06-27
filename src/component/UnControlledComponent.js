import React, { Component } from 'react'

export class UnControlledComponent extends Component {
    constructor(props) {
      super(props)
        this.formSubmit=this.formSubmit.bind(this)
      
      }
      formSubmit(event){
        debugger
        if("" != this.refs.fname.value && "" != this.refs.lname.value && "" != this.refs.address.value && "" != this.refs.contactno.value)
        {
            alert(this.refs.fname.value+""+this.refs.lname.value+""+this.refs.address.value+""+this.refs.contactno.value)
        }
        
      else {
        alert("Kindly fill the field")
        event.preventDefault();
      }
    }
  render() {
    return (
      <div>
        <h1>UnControlledComponent</h1>
        <form action=''>
            <div>
                <label>First Name: </label>
                <input type="text" ref='fname'/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" ref='lname'/>
            </div>
            <div>
                <label>Address: </label>
                <input type="text" ref='address'/>
            </div>
            <div>
                <label>Contact No: </label>
                <input type="number" ref='contactno'/>
            </div>
            <div>
                <button onClick={this.formSubmit}>Submit</button>
            </div>
        </form>

      </div>
    )
  }
}

export default UnControlledComponent