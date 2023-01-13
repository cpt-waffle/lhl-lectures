import React, { useState } from "react";
import useForm from "../hooks/useForm";


const Login = () => {
  // re-usability
  console.log(useForm());
  const email = useForm(); // {val, onValChange}
  const pass = useForm();  // {val, onValChange}

  return (<form>
    <h1>Login</h1>
    <p>email: <input type="email" name="email" value={email.val} onChange={email.onValChange}/></p>
    <p>password: <input type="password" name="pass" value={pass.val} onChange={pass.onValChange}/></p>
    <button>Login!</button>
  </form>);
}

export default Login;