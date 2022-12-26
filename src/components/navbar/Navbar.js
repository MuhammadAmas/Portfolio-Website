import React from 'react';
import { useLocation, Link } from "react-router-dom";
import Hamburger from './Hamburger'
import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';

function Navbar() {
    const { pathname } = useLocation();
    console.log(pathname);
    return <>

        <nav className={classes.navbar}>
            <div className={classes.navLogo}>
                <img src={logo} className={classes.logo} />
                <h2>Talal Ahmed</h2>
            </div>
            <ul className={[classes.navMenu]}>
                <li className={(pathname === '/Projects') ? (classes.active, classes.navItem) : classes.navItem}>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li className={(pathname === '/About') ? (classes.active, classes.navItem) : classes.navItem}>
                    <Link to="/About">About Me</Link>
                </li>
                <li className={(pathname === '/Contact') ? (classes.active, classes.navItem) : classes.navItem}>
                    <Link to="/Contact">Let's Connect</Link>
                </li>
            </ul>
            <Hamburger />
        </nav>

    </>
}

export default Navbar;