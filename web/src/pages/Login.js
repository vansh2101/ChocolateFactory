import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Login.css'
import image from '../static/login.png'

const Login = () => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const navigate = useNavigate()

    const submit = () => {
        fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:email, pass:pass})
        })
        .then(res => res.json())
        .then(data => {
            if(data.user){
                if(data.user.user_metadata.admin){
                    localStorage.setItem('session', data.user.email)
                    localStorage.setItem('admin', true)
                    navigate('/admin')
                }
                else {
                    localStorage.setItem('session', data.user.email)
                    localStorage.setItem('admin', false)
                    navigate('/')
                }
            }
            else{console.log(data)}
            
        })
    }

    if(!localStorage.getItem('session')){
        return (
            <div className="login">
                <div className="logo">Willy Wonka</div>
                <div className="flex">
                <div className="login">
                    <div className="title"><h1>Log In</h1></div>
                        <div className='form'>
                            <input type="email" placeholder="Enter your Email" onChange={val=>setEmail(val.target.value)}/>
                            <input type="password" placeholder="Enter your Password" onChange={val => setPass(val.target.value)}/>
                            <button type='submit' onClick={submit}>Submit</button>
                        </div>
                    </div>
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    </div>
            </div>
        )
    }
    else{
        if(localStorage.getItem('admin') == 'true'){window.location = '/admin'}
        else{window.location = '/'}
    }
}

export default Login
