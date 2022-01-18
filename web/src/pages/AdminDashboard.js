import React, { useState } from 'react';
import '../styles/AdminDashboard.css';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {FaMoneyBillWave, FaUserCircle} from 'react-icons/fa';
import {GiProfit} from 'react-icons/gi';
import { Link } from 'react-router-dom';
//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';

function AdminDashboard() {
    const [feedbacks, setFeedbacks] = useState([
        {
            name: 'Vansh Sachdeva',
            msg: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'
        },
        {
            name: 'Manan',
            msg: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'
        },
        {
            name: 'Jai Nanda',
            msg: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'
        }
    ])

    const [bars, setBars] = useState([90, 70, 30, 50, 60, 80, 40])

    const [employee, setEmployee] = useState([
        {
            id: '1',
            name: 'Oompa Loompa',
            orders: '200'
        },
        {
            id: '237',
            name: 'Oompa Loompa',
            orders: '143'
        }
    ])

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
                                <h2>$654.19K</h2>
                                
                                <h3><FaMoneyBillWave className='icon'/> Goal for the Month</h3>
                                <h2>$800k</h2>

                                <h3><GiProfit className='icon'/> Total Profit</h3>
                                <h2>$245.9k</h2>
                            </div>

                            <div className='box order-stats flexbox'>
                                <div>
                                    <h3>Completed</h3>
                                    <h1>08</h1>
                                </div>

                                <div>
                                    <h3>In Progress</h3>
                                    <h1>01</h1>
                                </div>

                                <div>
                                    <h3>New</h3>
                                    <h1>01</h1>
                                </div>

                                <div>
                                    <h3>Closed</h3>
                                    <h1>08</h1>
                                </div>
                            </div>
                        </div>

                        <div className='box feedbacks'>
                            <div className="all">
                                <h1>Customer Feedbacks</h1>
                                <Link to="/feedbacks" style={{textDecoration: "none", color: "black", fontFamily: "texta", fontWeight: "bold", marginLeft: "50px"}}>See All</Link>
                            </div>

                            <div className='flexbox' style={{justifyContent: 'space-between'}}>
                                {feedbacks.map(item => 
                                <div className='box feedback-box'>
                                    <h3><FaUserCircle className='icon' /> {item.name}</h3>
                                    <p>{item.msg}</p>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='box right-col'>
                        <h1>Performance Stats</h1>

                        <div className='box graph'>
                            <div className='graphbox flexbox'>
                                {bars.map(item => <div className='bars' style={{height: String(item)+'%'}}></div>)}
                            </div>
                            <h2>$250K</h2>
                            <span>11 January - 18 January 2022</span>
                        </div>

                        <div className='box employee-box'>
                            <h2>Top Employees</h2>
                            
                            {employee.map(item =>
                            <div>
                            <div className='employee'>
                                <img src='./assets/profile.png' />
                                <h4>{item.name} #{item.id}</h4>
                                <span>{item.orders} orders in one day</span>
                            </div>
                            <hr />
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
