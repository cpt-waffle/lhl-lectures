// 1 import react (optional for newer ver of react)
// 2 make a function that is your component
// 3 export default the function
// 4 make sure the function returns JSX

import React from 'react'
import useForm from '../hooks/useForm';

function RegisterForm() {
  const name = useForm();
  const email = useForm();
  const pass = useForm();
  const zodiac = useForm();

  const onSubmit = (evt) => {
      evt.preventDefault();
      console.log(name.val, email.val, pass.val, zodiac.val);
  }   
  // $('name').on('change', () => {

//   })
  return (
      <form onSubmit={onSubmit}>
          <p>Name:<input type='text' name='name' value={name.val} onChange={name.onChangeVal}/></p>
          <p>Email:<input type='text' name='email' value={email.val} onChange={email.onChangeVal}/></p>
          <p>Password:<input type='password' name='pass' value={pass.val} onChange={pass.onChangeVal}/></p>
          <p>Zodiac Sign<input type='text' name='zodiac' value={zodiac.val} onChange={zodiac.onChangeVal}/></p>
          <p><button>Register!!</button></p>
      </form>
  )
}

export default RegisterForm;