import React, {useState} from 'react';
import useForm from '../hooks/useForm';




const LoginForm = (props) => {
  // you can reuse a custom hook as many times as you want...
  // EVEN in the same component
  const email = useForm('v@k.ca'); // { val, onChangeVal}
  const pass = useForm('12345'); //


  return (
    <form>
      <p>Email:<input type='email' name='email' value={email.val} onChange={email.onChangeVal}/></p>
      <p>Pass:<input type='password' name='password' value={pass.val} onChange={pass.onChangeVal}/></p>
      <p><button>Sign in!</button></p>
    </form>
  )
} 


export default LoginForm;