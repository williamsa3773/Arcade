import React from 'react'

const LoggedIn = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Welcome {props.currentUser.username}</h1>
    </div>
  )
}

export default LoggedIn