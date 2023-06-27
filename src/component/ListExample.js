import React, { Component } from 'react'

class ListExample extends Component {
  render() {
    const fruitList =['Apple', 'Mango', 'Banana' , 'Grapes','Orange'];
    const iteratedList= fruitList.map((fruit)=> {
        return<li>{fruit}</li>
    })
    const filteredList=fruitList.filter((fruit) => {
        return fruit !="Apple" && fruit !='Orange'
    })
    return (
      <div>
        <h1>ListExample</h1>
        <div>
            <ul>
                {iteratedList}
            </ul>
        </div>
        <h1>FilteredList</h1>
        <div>
            <ul>
                {filteredList.map((fruit)=>{
                    return<li>{fruit}</li>
                })}
            </ul>
        </div>

      </div>
    )
  }
}

export default ListExample