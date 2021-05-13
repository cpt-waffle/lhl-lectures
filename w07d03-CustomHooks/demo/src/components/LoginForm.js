// 1 import react (optional for newer ver of react)
// 2 make a function that is your component
// 3 export default the function
// 4 make sure the function returns JSX

import React  from 'react'
import useForm from '../hooks/useForm';

function LoginForm() {

  const {email, pass, onChangeEmail, onChangePass} = useForm();

  const onSubmit = (evt) => {
      evt.preventDefault();
      console.log(email, pass);
  }   
  // $('name').on('change', () => {

//   })
  return (
      <form onSubmit={onSubmit}>
          <h1>LOGIN!!</h1>
          <p>Email:<input type='text' name='email' value={email} onChange={onChangeEmail}/></p>
          <p>Password:<input type='password' name='pass' value={pass} onChange={onChangePass}/></p>
          <p><button>Register!!</button></p>
      </form>
  )
}

export default LoginForm;