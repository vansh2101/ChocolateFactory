import React, { useState, useEffect } from 'react';
import '../styles/Stock.css';

//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';

function Stock() {
    const [stock, setStock] = useState()

    useEffect(() => {
        fetch('http://localhost:8000/inventory/list')
        .then(res => res.json())
        .then(data => setStock(data))
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

                <div className='box stock'>
                    <h1>Stock:</h1>

                    <table>
                        <tbody>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                        </tr>

                        {stock? stock.map((item,key) => 
                        <tr className='task-row' key={key}>
                            <td><img src='./assets/bar.png' /></td>
                            <td>{item.item}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                        </tr>
                        ): <tr></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Stock
