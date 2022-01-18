import React, { useState } from 'react';
import '../styles/Tasks.css';
import { BsCheck2Square } from "react-icons/bs";

//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';

function Tasks() {
    const [tasks, setTasks] = useState([
        {
            id: '1',
            name: '200 Dark Chocolates',
            status: 'inprogress',
            order_date: '18/01/2022',
        },
        {
            id: '2',
            name: '250 WonkaBars',
            status: 'inprogress',
            order_date: '18/01/2022',
        }
    ])

    const [orders, setOrders] = useState([
        {
            name: 'Vansh Sachdeva',
            email: 'vanshsachdeva2005@gmail.com',
            order_date: '18/01/2022',
            flavour: 'Dark Chocolate',
            quantity: 200
        },
        {
            name: 'Vansh Sachdeva',
            email: 'vanshsachdeva2005@gmail.com',
            order_date: '18/01/2022',
            flavour: 'Dark Chocolate',
            quantity: 200
        }
    ])

    return (
        <div className='split flexbox'>
            {/* sidebar */}
            <SideBar active='tasks'/>

            <div className='container'>
                {/* searchbar */}
                <div className='flexbox' style={{position: 'relative'}}>
                    <SearchBar />
                    <ProfileBtn />
                </div>

                <div className='main'>
                    <div className='box tasks'>
                        <h1>Ongoing Tasks</h1>

                        <table>
                            <tr>
                                <th>Task Name</th>
                                <th>Status</th>
                                <th>Order Date</th>
                                <th>Action</th>
                            </tr>

                            {tasks.map(item =>
                            <tr className='task-row'>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <td>{item.order_date}</td>
                                <td><BsCheck2Square className='done-btn'/></td>
                            </tr>
                            )}
                        </table>
                    </div>

                    <div className='flex'>
                        <div className='box new-tasks'>
                            <h1>New Orders</h1>

                            <table>
                                <tr>
                                    <th>CLIENT</th>
                                    <th>FLAVOUR</th>
                                    <th>QUANTITY</th>
                                </tr>

                                {orders.map(item => 
                                <tr className='task-row'>
                                    <td>{item.name} <br/>{item.email} <br/>{item.order_date}</td>
                                    <td>{item.flavour}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                                )}
                                
                            </table>
                        </div>

                        <div className='box details'>
                            <h3>COMPLETED</h3>
                            <h1>08</h1>
                            <h3>IN PROGRESS</h3>
                            <h1>02</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks
