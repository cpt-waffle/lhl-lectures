import React from 'react';
import useForm from '../hooks/useForm';


const LoginForm = props => {

  const email = useForm();
  const pass = useForm(); // {val,}

  return (<form>
    <h1>Login Form</h1>
    <p>Email: 
        <input 
          type="email"
          name="email"
          value={email.val}
          onChange={email.onValChange}
        />
    </p>
    <p>Password: 
      <input 
      type="password" 
      name="pass"
      value={pass.val}
      onChange={pass.onValChange}
      />
      </p>
  </form>)
}

export default LoginForm