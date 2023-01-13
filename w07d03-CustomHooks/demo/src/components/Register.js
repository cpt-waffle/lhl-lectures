import React, { useState } from "react";
import useForm from "../hooks/useForm";


const Register = () => {
  const email = useForm();
  const pass = useForm();
  const first_name = useForm();
  const last_name = useForm();

  return (<form>
    <h1>Register</h1>
    <p>email: <input type="email" name="email" value={email.val} onChange={email.onValChange}/></p>
    <p>password: <input type="password" name="pass" value={pass.val} onChange={pass.onValChange}/></p>
    <p>first Name <input type="text" name="fname" value={first_name.val} onChange={first_name.onValChange}/></p>
    <button>Register!</button>
  </form>);
}

export default Register;