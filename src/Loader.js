import React from "react";
import logo from './assets/white-logo.png';
import './App.css';

function Loader() {
    return (
        <div className='loader-container'>
            <img src={logo} />
            <p>Nice to see ya!</p>
        </div>
    );
}

export default Loader;