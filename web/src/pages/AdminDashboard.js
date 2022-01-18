import React, { useState, useEffect } from 'react';
import '../styles/AdminDashboard.css';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {FaMoneyBillWave, FaUserCircle} from 'react-icons/fa';
import {GiProfit} from 'react-icons/gi';

//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';

function AdminDashboard() {
    const [feedbacks, setFeedbacks] = useState()
    const [tasks, setTasks] = useState()
    const [completed, setCompleted] = useState()
    const [orders, setOrders] = useState()
    const [total, setTotal] = useState()

    const [bars, setBars] = useState()

    const [employee, setEmployee] = useState()

    useEffect(() => {
        fetch('http://localhost:8000/details/feedback')
        .then(res => res.json())
        .then(data => {
            setFeedbacks(data)
        })

        fetch('http://localhost:8000/details/neworders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: 'inprogress'})
        })
        .then(res => res.json())
        .then(data => {
            setTasks(data)
        })

        fetch('http://localhost:8000/details/topemployee')
        .then(res => res.json())
        .then(data => {
            setEmployee(data)
        })

        fetch('http://localhost:8000/details/neworders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: 'pending'})
        })
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })

        fetch('http://localhost:8000/details/neworders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: 'completed'})
        })
        .then(res => res.json())
        .then(data => {
            setCompleted(data)
        })

        fetch('http://localhost:8000/orders/past')
        .then(res => res.json())
        .then(data => {
            setBars(data)
        })

        fetch('http://localhost:8000/orders/month')
        .then(res => res.json())
        .then(data => {
            setTotal(data)
        })
    }, [])

    if (localStorage.getItem('admin') == 'true'){
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

                    <div className='flexbox main'>
                        <div className='left-col'>
                            <div className='flexbox' style={{justifyContent: 'space-between'}}>
                                <div className='box earnings'>
                                    <h3><RiMoneyDollarCircleFill className='icon'/> Total Earnings</h3>
                                    <h2>${total ? total : 0}</h2>
                                    
                                    <h3><FaMoneyBillWave className='icon'/> Goal for the Month</h3>
                                    <h2>$800k</h2>

                                    <h3><GiProfit className='icon'/> Total Profit</h3>
                                    <h2>$10</h2>
                                </div>

                                <div className='box order-stats flexbox'>
                                    <div>
                                        <h3>Completed</h3>
                                        <h1>{completed ? completed.length : 0}</h1>
                                    </div>

                                    <div>
                                        <h3>In Progress</h3>
                                        <h1>{tasks ? tasks.length : 0}</h1>
                                    </div>

                                    <div>
                                        <h3>New</h3>
                                        <h1>{orders ? orders.length : 0}</h1>
                                    </div>

                                    <div>
                                        <h3>Closed</h3>
                                        <h1>{completed ? completed.length : 0}</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='box fb'>
                                <h1>Customer Feedbacks</h1>

                                <div className='flexbox' style={{justifyContent: 'space-between'}}>
                                    {feedbacks ? feedbacks.slice(0,3).map((item,key) => 
                                    <div className='box feedback-box' key={key}>
                                        <h3><FaUserCircle className='icon' /> {item.customer}</h3>
                                        <p>{item.feedback}</p>
                                    </div>
                                    ): <></>}
                                </div>
                            </div>
                        </div>

                        <div className='box right-col'>
                            <h1>Performance Stats</h1>

                            <div className='box graph'>
                                <div className='graphbox flexbox'>
                                    {bars ? bars.map((item,key) => <div className='bars' style={{height: String((item+1)*10)+'%'}}></div>) : <></>}
                                </div>
                                <h2>${total ? total : 0}</h2>
                                <span>11 January - 18 January 2022</span>
                            </div>

                            <div className='box employee-box'>
                                <h2>Top Employees</h2>
                                
                                {employee ? employee.map((item,key) =>
                                <div key={key}>
                                <div className='employee'>
                                    <img src='./assets/profile.png' />
                                    <h4>{item.name} #{item.id}</h4>
                                    <span>{item.bonus} bonus points</span>
                                </div>
                                <hr />
                                </div>
                                ): <></>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        window.location = '/login'
    }
}

export default AdminDashboard
