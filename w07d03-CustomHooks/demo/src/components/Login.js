import React, { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState('');

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  }


  return (<form>
    <h1>Login Form</h1>
    <p>Email: 
        <input 
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}  
        />
    </p>
    <p>Password: 
      <input 
      type="password" 
      name="pass"
      />
      </p>
  </form>)
}



export default Login;