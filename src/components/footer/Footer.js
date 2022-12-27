import React from "react";
import classes from './Footer.module.css';
import '../../../src/App.css';
import logo from '../../assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return <>
        <footer>

            <div className={classes.logo}>
                <a href={"https://talalahmed.vercel.app"}>
                    <img src={logo} />
                </a>
            </div>

            <div className={classes.toconnect}>
                <div className={classes.email}>
                    <h3>Want to chat?</h3>
                    <h4>Feel free to drop me an email at <a href="mailto:talalahq311@gmail.com" className={classes.emailText}>talalahq311@gmail.com</a></h4>
                </div>

                <div className={classes.socials}>
                    <a href={"https://www.linkedin.com/in/talal-ahmed-a5479917b"} target={"_blank"}>
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                    </a>
                    <a href={"https://github.com/TalalAhmed311"} target={"_blank"}>
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a href={"https://medium.com/@talalahq311"} target={"_blank"}>
                        <FontAwesomeIcon icon={faMediumM} size="lg" />
                    </a>
                    <a href={"https://www.facebook.com/talal.qurashi.5"} target={"_blank"}>
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                    </a>
                    {/* <a href={""}>
                        <i class="fa-regular fa-envelope"></i>
                    </a> */}

                </div>
            </div>

            <div className={classes.credits}>
                <div style={{ opacity: "0.8" }}>© 2023 Amas | Website by <a href={"https://muhammadamas.netlify.app/"} target={"blank"}>Amas</a></div>
                {/* <div>Designed & Developed by <a href={"https://muhammadamas.netlify.app/"} target={"blank"}>Amas</a></div> */}
            </div>
        </footer>
    </>
}

export default Footer;