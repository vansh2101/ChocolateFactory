import React from 'react';
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import ProfileBtn from "../components/ProfileBtn";
import '../styles/Camera.css'
const Camera = () => {
    return (
        <div>
            <div className='split flexbox'>
                {/* sidebar */}
                <SideBar active='cctv'/>
                <div className='container'>
                    {/* searchbar */}
                    <div className='flexbox' style={{position: 'relative'}}>
                        <SearchBar />
                        <ProfileBtn />
                    </div>

                    <iframe src={"http://192.168.1.2:8080/video"} />

                </div>
            </div>
        </div>
    );
};

export default Camera;