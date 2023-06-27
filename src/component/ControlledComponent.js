import React, { Component } from 'react'

export class ControlledComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname: null,
         lname:null,
         contactno:0,
         city:null,
         state:null,
      }
      this.formSubmit=this.formSubmit.bind(this)
    }
    formSubmit(){
        alert(this.state.fname+""+
        this.state.lname+""+
        this.state.contactno+""+
        this.state.city+""+
        this.state.state)
    }
    updateFname(event){
        this.setState({fname : event.target.value})
    }
    updateLname(event){
        this.setState({lname : event.target.value})
    }
    updateContactNo(event){
        this.setState({contactno : event.target.value})
    }
    updateCity(event){
        this.setState({city : event.target.value})
    }
    updateState(event){
        this.setState({state : event.target.value})
    }
  render() {
    return (
      <div>
        <h1>ControlledComponent</h1>
        <form onSubmit ={this.formSubmit}>
        <div>
            <label>First Name : </label>
            <input type="text" onChange={this.updateFname.bind(this)}/>
        </div>
        <div>
            <label>Last Name : </label>
            <input type="text" onChange={this.updateLname.bind(this)}/>
        </div>
        <div>
            <label>Contact No : </label>
            <input type="text" onChange={this.updateContactNo.bind(this)}/>
        </div>
        <div>
            <label>City : </label>
            <input type="text" onChange={this.updateCity.bind(this)}/>
        </div>
        <div>
            <label>State : </label>
            <input type="text" onChange={this.updateState.bind(this)}/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
        </form>
      </div>
    )
  }
}

export default ControlledComponent