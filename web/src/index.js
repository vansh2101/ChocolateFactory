import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css';


//screens
import Dashboard from './pages/Dashboard';


export default function Web(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.render(<Web />, document.getElementById("root"));