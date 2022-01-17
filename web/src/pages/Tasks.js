import React from 'react';
import '../styles/Tasks.css';

//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';

function Tasks() {
    return (
        <div className='split flexbox'>
            {/* sidebar */}
            <SideBar active='dashboard'/>

            <div className='container'>
                {/* searchbar */}
                <div className='flexbox' style={{position: 'relative'}}>
                    <SearchBar />
                    <ProfileBtn />
                </div>

                <div className='main'>
                    <div className='tasks'>
                        <h1>Ongoing Tasks</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks
