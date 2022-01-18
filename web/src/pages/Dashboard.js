import React, {useEffect, useState} from 'react';
import '../styles/Dashboard.css';

//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';


function Dashboard() {
    const [tasks, setTasks] = useState()
    const [completed, setCompleted] = useState()
    const [user, setUser] = useState()

    useEffect(() => {
        fetch('http://localhost:8000/details/orders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:localStorage.getItem('session'), status: 'inprogress'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
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

        fetch('http://localhost:8000/details/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:localStorage.getItem('session')})
        })
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
    }, [])

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

                <div className='flexbox'>
                    <div className='left'>
                        {tasks ? tasks.slice(0,2).map((item,key) =>
                            <div className='box taskbox' key={key}>
                                <h2>Ongoing Task:</h2>

                                <div className='flexbox'>
                                    <img src='./assets/bar.png'></img>
                                    <div>
                                        Wonka Bar
                                        <br />
                                        {item.flavour}
                                    </div>
                                </div>

                                <div className='coloredbox'>{item.quantity} points</div>

                                <div className='task-details'>
                                    <span className='small'>CLIENT:</span> <span className='big'>{item.name}</span>
                                    <br/>
                                    <span className='small'>EMAIL:</span> <span className='big'>{item.email}</span>
                                    <br/>
                                    <span className='small'>DATE:</span> <span className='big'>{item.order_date}</span>
                                    <br/>
                                    <span className='small'>QUANTITY</span> <span className='big'>{item.quantity}</span>
                                </div>
                            </div>
                        ):
                        <>
                        <div className='box taskbox'>
                                <h2>No Ongoing Task</h2>
                        </div>
                        <div className='box taskbox'>
                            <h2>No Ongoing Task</h2>
                        </div>
                        </>
                        }
                    </div>

                    <div className='right'>
                        <div className='box bonus'>
                            <center>
                                <img src='./assets/graph.png'></img>

                                <table>
                                    <tr>
                                        <th>BONUS POINTS</th>
                                        <th>TOTAL SALARY</th>
                                    </tr>
                                    <tr>
                                        <td>{user ? user.bonus : 0}</td>
                                        <td>${user ? user.salary + Math.floor(user.bonus/500): 0}</td>
                                    </tr>
                                </table>
                            </center>
                        </div>

                        <div className='box tasks-status'>
                            <h2>Tasks:</h2>
                            <table>
                                <tr>
                                    <th>Completed</th>
                                    <th>In Progress</th>
                                </tr>
                                <tr>
                                    <td>{completed ? completed.length: 0}</td>
                                    <td>{tasks? tasks.length: 0}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
