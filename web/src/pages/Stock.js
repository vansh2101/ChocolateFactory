import React, { useState } from 'react';
import '../styles/Stock.css';

//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';

function Stock() {
    const [stock, setStock] = useState([
        {
            name: 'Cocoa Powder',
            quantity: '6000',
            price: 2.45
        },
        {
            name: 'Chocolate Syrup',
            quantity: '2000',
            price: 3.65
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

                <div className='stock'>
                    <h1>Stock:</h1>

                    <table>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                        </tr>

                        {stock.map(item => 
                        <tr className='task-row'>
                            <td><img src='./assets/bar.png' /></td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                        </tr>
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Stock
