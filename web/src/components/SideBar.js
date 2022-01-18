import React, { useState } from 'react';
import { RiListCheck2, RiTaskLine, RiFileUserLine } from "react-icons/ri";
import {GiChocolateBar} from 'react-icons/gi'
import {GrUserWorker} from 'react-icons/gr'
import {HiOutlineLogout} from 'react-icons/hi'
import '../styles/Components.css'
import { Link } from 'react-router-dom'

function SideBar({active}) {
    const admin = localStorage.getItem('admin')

    if(admin=='true'){
        var links = [
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
                name: 'STOCK',
                link: '/stock',
                icon: <GiChocolateBar/>,
            },
            {
                name: 'EMPLOYEES',
                link: '/employee',
                icon: <GrUserWorker/>,
            },
            {
                name: 'CCTV Footage',
                link: '/camera',
                icon: <RiFileUserLine/>,
            },
        ]
    }
    else{
        var links = [
            {
                name: 'DASHBOARD',
                link: '/',
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
        ]
    }

    const logout = () => {
        localStorage.removeItem('session')
        localStorage.removeItem('admin')
        window.location = '/login'
    }

    return (
        <div className='sidebar'>
            <Link to={"/"}><h1>Willy Wonka</h1></Link>

            <ul>
                {links.map((item,key) =>
                <Link to={item.link} key={key}><li className={active === item.name.toLowerCase() ? 'active': ''}>{item.icon} <span>{item.name}</span></li></Link>
                )}

                <li style={{cursor: 'pointer'}} onClick={logout}><HiOutlineLogout/> <span>LOGOUT</span></li>
                
            </ul>
        </div>
    )
}

export default SideBar;
