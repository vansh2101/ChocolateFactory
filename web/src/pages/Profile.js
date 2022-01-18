import React from 'react'
import '../styles/Profile.css'
import banner from '../static/banner.png'
import Sidebar from '../components/SideBar'
const Profile = () => {
    return (
        <>
            <div className="profile">
                    <Sidebar/>
                <div className="banner">
                    <img src={banner} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Profile
