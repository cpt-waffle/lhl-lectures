import React, {useState} from 'react';
import useForm from '../hooks/useForm';


const RegisterForm = (props) => {
  const email = useForm();
  const pass = useForm();
  const passConf = useForm();


  return (
    <form>
      <h1>Register Form</h1>
      <p>Email:<input type='email' name='email' value={email.val} onChange={email.onChangeVal}/></p>
      <p>Pass:<input type='password' name='password' value={pass.val} onChange={pass.onChangeVal}/></p>
      <p>Pass Conf:<input type='password' name='password' value={passConf.val} onChange={passConf.onChangeVal}/></p>
      <p><button>Sign in!</button></p>
    </form>
  )
} 


export default RegisterForm;