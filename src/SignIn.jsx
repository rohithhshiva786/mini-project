import React from 'react';
import './App.css';

function SignIn(){
    return(
        <div className='App'>
            <h1 className='title'>Sign In</h1>
            <input className='input' type="username" placeholder="username" required:true /><br></br>
            <input className='input' type="Email id" placeholder="Email Id" required:true /><br></br>
            <input  className='input' type="password" placeholder="password" required:true/><br></br>
            <button className='input' type="submit">Login</button>
            
        </div>
    )
}

export default SignIn;