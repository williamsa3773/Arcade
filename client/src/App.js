import React, { useState, useEffect } from 'react'
import { withRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import { loginUser, registerUser, verifyUser } from './services/api-helper'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import LoggedIn from './components/LoggedIn'

const App = (props) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [authFormData, setAuthFormData] = useState({
  username: "",
  emails: "",
  password: "",
  })

  useEffect(()=> {
    (async() => {
      const user = await verifyUser()
      if (user) {
        setCurrentUser(user)
      }})()}, [])

  const handleLogin = async (e) => {
    const userData = await loginUser(authFormData)
    setCurrentUser(userData)
    console.log(currentUser)
    props.history.push('/authed')
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    await registerUser(authFormData)
    handleLogin()
  }
  const handleLogout = () => {
    localStorage.clear()
    setCurrentUser(null)
  }

  const authHandleChange = (e) => {
    const { name, value } = e.target
    setAuthFormData({
      ...authFormData,
      [name]: value
    })
  }


  return(
    <div>
      <Switch>
        <Route path='/register' render={()=> (
          <Register
          handleRegister={handleRegister}
          handleChange={authHandleChange}
          formData={authFormData}/>
        )} />
        <Route path='/login' render={()=> (
          <Login
          handleLogin={handleLogin}
          handleChange={authHandleChange}
          formData={authFormData}/>
        )} />
        <Route path='/authed' render={()=> (
          <LoggedIn
          handleLogout={handleLogout}
          currentUser={currentUser} 
          setCurrentUser={setCurrentUser} />
        )} />
        <Redirect from='/' to='/login' />
      </Switch>
    </div>
  )
}

export default App