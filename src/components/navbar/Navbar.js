import React from 'react';
import { Link } from "react-router-dom";

import classes from './Navbar.module.css';

function Navbar() {

    return <>

        <nav className={classes.navbar}>

            <div className={classes.hamburger}>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
            </div>
            <div className={classes.navLogo}>
                <h2>Talal Ahmed</h2>
            </div>
            <ul className={[classes.navMenu]}>
                <li className={classes.navItem}><Link to="/About">About Me</Link></li>
                <li className={classes.navItem}><Link to="Projects">Projects</Link></li>
                <li className={classes.navItem}><Link to="">My Skills</Link></li>
                <li className={classes.navItem}><Link to="/Contact">Let's Connect</Link></li>
            </ul>

        </nav>

    </>
}

export default Navbar;