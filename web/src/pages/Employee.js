import React, { useState, useEffect } from 'react';
import '../styles/Stock.css';

//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';

function Employee() {
    const date = new Date().getDate()

    const [employee, setEmployee] = useState()

    useEffect(() => {
        fetch('http://localhost:8000/details/employee')
        .then(res => res.json())
        .then(data => setEmployee(data))
    }, [])

    if (localStorage.getItem('admin') == 'true'){
    return (
        <div className='split flexbox'>
            {/* sidebar */}
            <SideBar active='employees'/>

            <div className='container'>
                {/* searchbar */}
                <div className='flexbox' style={{position: 'relative'}}>
                    <SearchBar />
                    <ProfileBtn />
                </div>

                <div className='box stock'>
                    <h1>Employees:</h1>

                    <table>
                        <tbody>
                            <tr>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>SALARY</th>
                                <th>BONUS</th>
                                <th>LEAVES</th>
                            </tr>

                            
                            {employee? employee.map((item, key) => 
                            <tr className='task-row' key={key}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>${item.salary}</td>
                                <td>${item.bonus}</td>
                                <td>{date - item.work_days}</td>
                            </tr>
                            ) :<tr></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
    }
    else{
        if(localStorage.getItem('admin') == 'false'){window.location = '/'}
        else{window.location = '/login'}
    }
}

export default Employee
