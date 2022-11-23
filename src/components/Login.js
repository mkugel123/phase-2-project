import React, { useState } from "react";

function Login({ onLoginSubmit }) {

  const [loginData, setLoginData] = useState({})

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onLoginSubmit(loginData)
  }

  return(
    <div id="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" placeholder="Username" value={loginData.user} onChange={handleChange}/>
        <br/>
        <input type="password" name="pass" placeholder="password" value={loginData.pass} onChange={handleChange}/>
        <br/>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login