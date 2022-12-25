import React from "react";
import classes from './Footer.module.css';
import '../../../src/App.css';
import logo from'../../assets/logo.png';

function Footer() {

    return <>
        <footer>

            <div>
            {/* <img src={logo} className={classes.logo}/> */}

                <h1>Talal Ahmed</h1>
            </div>
            
            <div>
                <h3>Want to chat?</h3>
                <h4>Feel free to drop me an email at <a href="mailto:talalhq311@gmail.com">talalhq311@gmail.com</a></h4>
            </div>



            <div className={classes.credits}>
                <div>Copyright © 2023 Muhammad Amas</div>
                <div>Thanks to <a href={"https://muhammadamas.netlify.app/"} target={"blank"}>Amas</a> for the development</div>
            </div>
        </footer>
    </>
}

export default Footer;