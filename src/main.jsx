import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Login from './SignIn.jsx'
// import './index.css'
// import './App.css'
import Signup from './Signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login /> */}
    <Signup/>
  </React.StrictMode>,
)
