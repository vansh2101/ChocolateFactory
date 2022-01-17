import React from 'react';
import { FiSearch } from "react-icons/fi";
import '../styles/Components.css'

function SearchBar() {
    return (
        <div className='searchbar'>
            <FiSearch className='search-icon' />
            <input type='text' placeholder='Search...' name='search' />
        </div>
    )
}
export default SearchBar
