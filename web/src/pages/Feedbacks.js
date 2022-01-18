import React from 'react'
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import ProfileBtn from '../components/ProfileBtn';
import '../styles/Feedbacks.css'
import svg from '../static/feedback.svg'
const Feedbacks = () => {
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
                        <input type="email" placeholder="kanye@west.com"/>
                        <input type="password" placeholder="password"/>
                        <input type="text" className="message" placeholder="Your feedback"/>
                        <button type="submit" style={{height: "800px"}}>Submit</button>
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
