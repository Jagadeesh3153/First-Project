import React, { Component } from 'react'

class Componentlifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hello : "javaTpoint"
         
      }
      this.updateHello=this.updateHello.bind(this)
    }
    componentWillMount(){
        console.log("component Loading starts......")
    }
  render() {
    return (
      <div>
        <h1>Componentlifecycle</h1>
        <p>
            hello : {this.state.hello}
        </p>
        <button onClick={this.updateHello}>Increase</button>
      </div>
    )
  }
componentWillUpadte(){
    alert("component update start.....")
}
componentDidUpdate(){
    document.write("component update ends.....")
}
updateHello(){
    this.setState({
        hello: this.state.hello+1
    })
}
componentWillUnmount(){
    alert("component get destroyed...........")
}
}

export default Componentlifecycle