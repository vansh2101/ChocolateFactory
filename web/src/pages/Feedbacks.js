import React, {useState} from 'react'
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import ProfileBtn from '../components/ProfileBtn';
import '../styles/Feedbacks.css'
import svg from '../static/feedback.svg'


const Feedbacks = () => {
    const [name, setName] = useState()
    const [msg, setMsg] = useState()
    const [email, setEmail] = useState()

    const submit = () =>{
        fetch('http://localhost:8000/feedbacks/feedbacks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user:name, feedback:msg, email:email})
        })
        .then(res => res.json())
        .then(data => window.location = '/feedbacks')
    }

    return (
        <>
         <div className='split flexbox'>
            {/* sidebar */}
            <SideBar active='profile'/>

            <div className='container'>
                {/* searchbar */}
                <div className='flexbox' style={{position: 'relative'}}>
                    <SearchBar />
                    <ProfileBtn />
                </div>
                <div className="main">
                    <div className="fox">
                        <div className="feedbacks" >
                            <h1>Enter Your Feedback</h1>
                            <input type="text" placeholder="Your Name" onChange={val => setName(val.target.value)}/>
                            <input type="email" placeholder="Your Email" onChange={val => setEmail(val.target.value)}/>
                            <input type="text" className="message" placeholder="Your feedback" onChange={val=>setMsg(val.target.value)}/>
                            <button type="submit" onClick={submit}>Submit</button>
                        </div>
                        <div className="svg">
                            <img src={svg} alt=""/>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        </>
    )
}

export default Feedbacks
