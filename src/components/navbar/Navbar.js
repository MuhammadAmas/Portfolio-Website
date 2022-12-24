import React from 'react';
// import Hamburger from './Hamburger';
import classes from './Navbar.module.css';
const Navbar = props => {

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
                <li className={classes.navItem}><a href="#about-me">About Me</a></li>
                <li className={classes.navItem}><a href="#my-projects">Projects</a></li>
                <li className={classes.navItem}><a href="#my-skills">My Skills</a></li>
                <li className={classes.navItem}><a href="#let's-connect">Let's Connect</a></li>
            </ul>


        </nav>

    </>
}

export default Navbar;