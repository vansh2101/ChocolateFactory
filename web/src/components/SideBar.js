import React, { useState } from 'react';
import { RiListCheck2, RiTaskLine, RiFileUserLine } from "react-icons/ri";
import '../styles/Components.css'

function SideBar({active}) {
    const [links, setLinks] = useState([
        {
            name: 'DASHBOARD',
            link: '/',
            icon: <RiListCheck2/>,
        },
        {
            name: 'TASKS',
            link: '/',
            icon: <RiTaskLine/>,
        },
        {
            name: 'PROFILE',
            link: '/',
            icon: <RiFileUserLine/>,
        },
    ])

    return (
        <div className='sidebar'>
            <h1>Willy Wonka</h1>

            <ul>
                {links.map(item => 
                <a href={item.link}><li className={active === item.name.toLowerCase() ? 'active': ''}>{item.icon} <span>{item.name}</span></li></a>
                )}
                
            </ul>
        </div>
    )
}

export default SideBar
