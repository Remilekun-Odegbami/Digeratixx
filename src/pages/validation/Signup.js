import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
  return (
 <div className="signup-page">
        <div className="signup-form">
            <form className="register-form">
            <input type="text" placeholder="first name"/>
            <input type="text" placeholder="last name"/>
            <input type="password" placeholder="password"/>
            <input type="password" placeholder="confirm password"/>
            <input type="text" placeholder="email address"/>
            <button onClick={() => {
        navigate('/blog')                
            }}>create</button>
            <p className="message mt-2">Already registered? <a href="./Login">Sign In</a></p>
            </form>            
        </div>
    </div>
    
  )
}