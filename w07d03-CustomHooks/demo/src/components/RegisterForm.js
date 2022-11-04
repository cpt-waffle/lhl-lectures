import React from 'react';
import useForm from '../hooks/useForm';

const RegisterForm = props => {
  // console.log(useForm);
  const email = useForm();
  const pass = useForm();
  const passConf = useForm();
  const name = useForm();


  return (<form>
    <h1>Registration Form</h1>
    <p>Email: 
        <input 
          type="email"
          name="email"
          value={email.val}
          onChange={email.onValChange}
        />
    </p>
    <p>Name: 
      <input 
        type="text" 
        name="name"
        value={name.val}

        onChange={name.onValChange}

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
    <p>Password Conf: 
      <input 
        type="password" 
        name="passconf"
        value={passConf.val}
        onChange={passConf.onValChange}
      />
    </p>


  </form>);
}


export default RegisterForm;