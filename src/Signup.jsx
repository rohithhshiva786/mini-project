import React from 'react';
// import './App.css';

function Signup()
{
    const onSubmit()=>{
        
    }
    return(
        <div className='App'>
            <h1 className='title'>Sign Up</h1>
            <input className='input' type="text" placeholder="First Name" required:true /><br></br>
            <input className='input' type="text" placeholder="Last Name" required:true /><br></br>
            <input className='input' type="text" placeholder="Age" required:true /><br></br>
            <input className='input' type="username" placeholder="username" required:true /><br></br>
            <input className='input' type="Email id" placeholder="Email Id" required:true /><br></br>
            <input className='input' type="password" placeholder=" create password" required:true/><br></br>
            <button className='input' type="submit">Sign up</button>



            
        </div>
    )
}

export default Signup;