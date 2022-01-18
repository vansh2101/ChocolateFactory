import React from 'react'
import '../styles/Profile.css'
import banner from '../static/banner.png'
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import ProfileBtn from '../components/ProfileBtn'
import pfp from '../static/profile.png'
import pushpa from '../static/pushpa.png'
import {FaUserCircle} from "react-icons/fa";
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
                            <h1>OompaGG</h1>
                            <p>Factory Employee</p>
                        </div>
                        {/*<div className="stats">
                            <div className="progress"></div>
                            <div className="number">
                                <p>600/1000 Points</p>
                            </div>
                        </div>*/}
                        <div className='box detail'>
                            <h1>Stats</h1>

                            <div className='flexbox' style={{justifyContent: 'space-between'}}>
                                <div className='box details-box'>
                                    <h3>Salary</h3>
                                    <p>$10000</p>
                                </div>
                                <div className='box details-box'>
                                    <h3>Bonus</h3>
                                    <p>$100</p>
                                </div>
                                <div className='box details-box'>
                                    <h3>Leaves</h3>
                                    <p>23</p>
                                </div>
                                <div className='box details-box'>
                                    <h3>Last month's salary</h3>
                                    <p>$1000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="summary">
                        <h1>Summary</h1>
                        <p>Chocolatier with 10+ years of experience in creating new chocolate flavours and producing chocolates in the factory. Hard working employee with a fast-paced work ethic and good singing skills. Proven to be a great sales representative and customer service employee.</p>
                    </div>*/}
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
                                <div className={"details-inner"}>
                                    <h2>Additional Details</h2>
                                    <i className="fas fa-envelope"/>
                                    <h3>EMAIL</h3>
                                    <p>emailme@oompas.co</p>
                                    <i className="fas fa-language"/>
                                    <h3>LANGUAGES</h3>
                                    <p>
                                        Oompa-Loompish<br/>
                                        English
                                    </p>
                                    <i className="fas fa-id-badge"/>
                                    <h3>NICKNAME</h3>
                                    <p>Anvin</p>
                                    <i className="fas fa-globe-africa"/>
                                    <h3>COUNTRY</h3>
                                    <p>
                                        Loompaland
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
