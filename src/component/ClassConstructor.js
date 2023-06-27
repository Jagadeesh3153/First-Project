import React, { Component } from 'react'

class ConstructorExample extends Component {

    constructor(){
        super();

        this.state = {
            name : 'Ramesh',
            address : null,
            streetNo : 0
        }

        this.updateAddress = this.updateAddress.bind(this);
        this.updateStreetNo = this.updateStreetNo.bind(this);

    }

    updateAddress(event){
        this.setState({
            address : event.target.value
        })
    }

    updateStreetNo(event){
        this.setState({
            streetNo : event.target.value
        })
    }

  render() {
    return (
      <div>
        <h1>ConstructorExample</h1>
        <div>
        <p>Name : { this.state.name }</p>
        <p>Address : { this.state.address }</p>
        <p>Street No. : { this.state.streetNo }</p>
        </div>
        <div>
            <div>
            <label>Address : </label>
            <input type='text' value={this.state.address}
                onChange={this.updateAddress} />
            </div>
            <div>
            <label>Street No. : </label>
            <input type='text' value={this.state.streetNo}
                onChange={this.updateStreetNo} />
            </div>
        </div>
      </div>
    )
  }
}

export default ConstructorExample