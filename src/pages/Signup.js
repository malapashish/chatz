import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle } from "../helpers/auth";

const SignUp = () =>{
  
  const [ error , setError ] = useState(null);
  const [ email , setEmail ] = useState("");
  const [ password , setPassword ] = useState("");

  const handleSubmit = async(e) => {
    console.log('Action detected');
    e.preventDefault();
    setError("");
    try{
      await signup(email , password);
    }catch (error){
      setError(error.message);
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const googleSignIn = async () => {
    try{
      await signInWithGoogle();
    }catch (error){
      setError(error.message);
    }
  }

  return(
    <div className = "container">
      <form className = "mt-5 py-5 px-5" onSubmit = {handleSubmit} ></form>
        <h1>
          Sign up to
          <Link className = "title ml-2" to = '/'>Chatz</Link>
        </h1>
        <p className="lead">Fill in the form below to create an account.</p>
        <div className = 'form-group'>
          <input 
          className = 'form-control'
          placeholder = "Please enter a vaild email address"
          name = 'email'
          type = 'email'
          onChange = {handleEmailChange}
          />
        </div>
        <div className = 'form-group'>
          <input 
          className = 'form-control'
          placeholder = "Please enter a vaild password"
          name = 'password'
          type = 'password'
          onChange = {handlePasswordChange}
          />
        </div>
        <div className = "form-group" > 
          {error ? <p className = 'text-danger'>{error}</p> : null}        
          <button className="btn btn-primary px-5" type="submit" onClick = {handleSubmit}>Sign up</button>
        </div>
        <p>You can also sign up with any of these services</p>
        <button className = 'btn btn-danger mr-2' type = "button" onClick = {googleSignIn} >
          Sign up with google
        </button>
    </div>
  )
}

export default SignUp;