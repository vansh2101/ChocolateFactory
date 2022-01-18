import React from 'react'
import '../styles/Profile.css'
import banner from '../static/banner.png'
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import ProfileBtn from '../components/ProfileBtn'
import pfp from '../static/profile.png'
import pushpa from '../static/pushpa.png'
const Profile = () => {
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
                <div className="flex">
                <div className='main nice'>
                    <div className="profile">
                        <div className="banner">
                            <img src={banner} alt="" />
                        </div>
                        <div className="pfp">
                            <img src={pfp} alt="" />
                        </div>
                        <div className="name">
                            <h1>John Doe</h1>
                            <p>Factory Employee</p>
                        </div>
                        <div className="stats">
                            <div className="progress"></div>
                            <div className="number">
                                <p>600/1000 Points</p> 
                            </div>
                        </div>
                    </div>
                    <div className="summary">
                        <h1>Summary</h1>
                        <p>Chocolatier with 10+ years of experience in creating new chocolate flavours and producing chocolates in the factory. Hard working employee with a fast-paced work ethic and good singing skills. Proven to be a great sales representative and customer service employee.</p>
                    </div>
                    </div>
                        <div className="right">
                            <div className="pushpa">
                                <h2>My Manager</h2>
                                <div className="photo">
                                    <img src={pushpa} alt="" />
                                    <p>PushpaGG</p>
                                </div>
                            </div>
                            <div className="details">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
