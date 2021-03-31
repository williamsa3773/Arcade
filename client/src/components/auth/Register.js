import React from 'react'
import { Link } from 'react-router-dom'

const Register = (props) => {
  return (
    <div className='userRegister'>
      <div className='heading'>
        <h1>Register</h1>
      </div>
      <form onSubmit={props.handleRegister}>
        <input name='username' type='text' placeholder='USERNAME' value={props.formData.username} onChange={props.handleChange} />
        <input name='email' type='text' placeholder='EMAIL' value={props.formData.email} onChange={props.handleChange} />
        <input name='password' type='password' placeholder='PASSWORD' value={props.formData.password} onChange={props.handleChange} />
        <button>Register</button>
      </form>
      <Link to='/login'>
        <button>LOGIN!!</button>
      </Link>
    </div>
  )
}

export default Register