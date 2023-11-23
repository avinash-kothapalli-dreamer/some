import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css' 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './index.css'

import Login from './components/logincomponent'
import SignUp from './components/signup'
import UserDetails from './components/userDetails'




function App() {
  const isloggedin = window.localStorage.getItem("loggedin")
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        


        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={isloggedin=="true"?<UserDetails/>:<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App