import React from "react";
import classes from './Footer.module.css';
import '../../../src/App.css';
import logo from '../../assets/logo.png';

function Footer() {

    return <>
        <footer>

            <div className={classes.logo}>
                <img src={logo} />
            </div>

            <div className={classes.details}>
                <h3>Want to chat?</h3>
                <h4>Feel free to drop me an email at <a href="mailto:talalhq311@gmail.com" className={classes.email}>talalhq311@gmail.com</a></h4>
            </div>



            <div className={classes.credits}>
                <div>Copyright © 2023 Muhammad Amas</div>
                <div>Designed & Developed by <a href={"https://muhammadamas.netlify.app/"} target={"blank"}>Amas</a></div>
            </div>
        </footer>
    </>
}

export default Footer;