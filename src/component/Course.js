import React, { Component } from 'react'

export class Course extends Component {
  render() {
    const courseList=['HTML', 'CSS', 'JS', 'REACT.JS', 'JAVA']
    return (
      <div>
        <h1>Course</h1>
        <div>
            <ul>
                {courseList.map((Course)=>{
                    return<li>{Course}</li>
                })}
            </ul>
        </div>
      </div>
    )
  }
}

export default Course