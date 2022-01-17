import React from 'react'
import '../styles/Login.css'
import image from '../static/login.png'
const Login = () => {
    return (
        <div className="login">
            <div className="logo">Willy Wonka</div>
            <div className="flex">
            <div className="login">
                <div className="title">Log In </div>
                <form action="">
                    <input type="email" placeholder="Enter your Email"/>
                    <input type="password" placeholder="Enter your Password"/>
                </form>
                </div>
                <div className="image">
                    <img src={image} alt="" />
                </div>
                </div>
        </div>
    )
}

export default Login
