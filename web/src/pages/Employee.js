import React, { useState } from 'react';
import '../styles/Stock.css';

//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';

function Employee() {
    const [employee, setEmployee] = useState([
        {
            name: 'Vansh Sachdeva',
            email: 'vanshsachdeva2005@gmail.com',
            salary: 20000,
            bonus: 2500,
            leaves: 1
        },
        {
            name: 'Manan',
            email: 'mananman23@gmail.com',
            salary: 10000,
            bonus: 500,
            leaves: 10
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

                <div className='box stock'>
                    <h1>Employees:</h1>

                    <table>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>SALARY</th>
                            <th>BONUS</th>
                            <th>LEAVES</th>
                        </tr>

                        {employee.map(item => 
                        <tr className='task-row'>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>${item.salary}</td>
                            <td>${item.bonus}</td>
                            <td>{item.leaves}</td>
                        </tr>
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Employee
