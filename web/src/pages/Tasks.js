import React, { useState, useEffect } from 'react';
import '../styles/Tasks.css';
import { BsCheck2Square } from "react-icons/bs";

//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';

function Tasks() {
    const [tasks, setTasks] = useState()
    const [completed, setCompleted] = useState()
    const [orders, setOrders] = useState()

    useEffect(() => {
        if (localStorage.getItem('admin') == 'false'){
            fetch('http://localhost:8000/details/orders', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email:localStorage.getItem('session'), status: 'inprogress'})
            })
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })

            fetch('http://localhost:8000/details/orders', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email:localStorage.getItem('session'), status: 'completed'})
            })
            .then(res => res.json())
            .then(data => {
                setCompleted(data)
            })
        }

        else{
            fetch('http://localhost:8000/details/neworders', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({status: 'inprogress'})
            })
            .then(res => res.json())
            .then(data => {
                setTasks(data)
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
        }

        fetch('http://localhost:8000/details/neworders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: 'pending'})
        })
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    }, [])

    const complete = (id) => {
        fetch('http://localhost:8000/tasks/complete', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id:id})
        })
        .then(res => res.json())
        .then(data => {
            setTasks((prev) => {
                return prev.filter((item) => item.id !== id)
            })
        })
    }

    if (localStorage.getItem('session')){
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
                                <tbody>
                                <tr>
                                    <th>Task Name</th>
                                    <th>Status</th>
                                    <th>Order Date</th>
                                    <th>Action</th>
                                </tr>

                                {tasks? tasks.map((item,key) =>
                                <tr className='task-row' key={key}>
                                    <td>{item.quantity} {item.flavour}</td>
                                    <td>{item.status}</td>
                                    <td>{item.order_date}</td>
                                    <td><BsCheck2Square className='done-btn' onClick={() => complete(item.id)}/></td>
                                </tr>
                                ): <tr></tr>}
                                </tbody>
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

                                    {orders ? orders.map((item,key) => 
                                    <tr className='task-row' key={key}>
                                        <td>{item.name} <br/>{item.email} <br/>{item.order_date}</td>
                                        <td>{item.flavour}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                    ): <tr></tr>}
                                    
                                </table>
                            </div>

                            <div className='box det'>
                                <h3>COMPLETED</h3>
                                <h1>{completed ? completed.length : 0}</h1>
                                <h3>IN PROGRESS</h3>
                                <h1>{tasks ? tasks.length : 0}</h1>
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

export default Tasks
