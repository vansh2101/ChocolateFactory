import React, { useState } from 'react';
import { RiListCheck2, RiTaskLine, RiFileUserLine } from "react-icons/ri";
import '../styles/Components.css'
import { Link } from 'react-router-dom'
function SideBar({active}) {
    const [links, setLinks] = useState([
        {
            name: 'DASHBOARD',
            link: '/admin',
            icon: <RiListCheck2/>,
        },
        {
            name: 'TASKS',
            link: '/tasks',
            icon: <RiTaskLine/>,
        },
        {
            name: 'PROFILE',
            link: '/profile',
            icon: <RiFileUserLine/>,
        },
    ])

    return (
        <div className='sidebar'>
            <h1>Willy Wonka</h1>

            <ul>
                {links.map((item,key) =>
                <Link to={item.link} key={key}><li className={active === item.name.toLowerCase() ? 'active': ''}>{item.icon} <span>{item.name}</span></li></Link>
                )}
                
            </ul>
        </div>
    )
}

export default SideBar;
