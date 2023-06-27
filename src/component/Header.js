import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link,} from 'react-router-dom'
import Contact from './Contact';
import Home from './Home';
import Course from './Course';
class Header extends Component {
  render() {
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/course'>Course</Link>
            </li>

          </ul>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route eaxct path='/course' element={<Course/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default Header