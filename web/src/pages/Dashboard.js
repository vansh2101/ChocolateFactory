import React, {useState} from 'react';
import '../styles/Dashboard.css';

//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';


function Dashboard() {
    const [tasks, setTasks] = useState([
        {
            name: 'Vansh Sachdeva',
            email: 'vanshsachdeva2005@gmail.com',
            order_date: '16/05/2022',
            quantity: 200,
            flavour: 'Nutty Chocolate Surprise'
        },
        {
            name: 'Vansh Sachdeva',
            email: 'vanshsachdeva2005@gmail.com',
            order_date: '16/05/2022',
            quantity: 200,
            flavour: 'Nutty Chocolate Surprise'
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
                    <div className='left'>
                        {tasks.map(item =>
                            <div className='taskbox'>
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
                        )}
                    </div>

                    <div className='right'>
                        <div className='bonus'>
                            <center>
                                <img src='./assets/graph.png'></img>

                                <table>
                                    <tr>
                                        <th>BONUS POINTS</th>
                                        <th>TOTAL SALARY</th>
                                    </tr>
                                    <tr>
                                        <td>1000</td>
                                        <td>$20200</td>
                                    </tr>
                                </table>
                            </center>
                        </div>

                        <div className='tasks-status'>
                            <h2>Tasks:</h2>
                            <table>
                                <tr>
                                    <th>Completed</th>
                                    <th>In Progress</th>
                                </tr>
                                <tr>
                                    <td>08</td>
                                    <td>02</td>
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
