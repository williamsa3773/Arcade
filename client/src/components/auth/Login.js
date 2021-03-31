import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (
    <div className='userLogin'>
      <div className='heading'>
        <h1>Login</h1>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleLogin()}}>      
        <input name='username' type='text' placeholder='USERNAME' value={props.formData.username} onChange={props.handleChange} />
        <input name='password' type='password' placeholder='PASSWORD' value={props.formData.password} onChange={props.handleChange} />
        <button>Login</button>
      </form>
      <Link to ='/register'>
        <button>REGISTER!!</button>
      </Link>
    </div>
  )
}

export default Login