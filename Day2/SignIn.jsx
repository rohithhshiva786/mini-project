import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import (useNavigation)
function SignIn(){
    const onclick = ()=> {
        window.location.href = ''
    }
    const navigate = useNavigate();
    return(
        <div>
            <div className='App'>
                <h1 className='title'>Sign In</h1>
                <input className='input' type="username" placeholder="username" required:true /><br></br>
                <input className='input' type="Email id" placeholder="Email Id" required:true /><br></br>
                <input  className='input' type="password" placeholder="password" required:true/><br></br>
                <button className='input' onClick={() => navigate('./Homepage')} type="submit">SignIn</button>
            </div> 
            <div className='username'>
                <a href="./Signup">REGISTER</a>
            </div>
        </div>

        
    )
}

export default SignIn;