import React from "react";
import classes from './Contact.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons'

function Contact() {

    return <>
        <section className={classes["contact-me"]} id="let's-connect">
            <div className={classes["contact-header"]} >
                <h1>Drop me a note over here ⇢ </h1>
                {/* <FontAwesomeIcon icon={brands('twitter')} /> */}
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
                </div>
            </div>
            <div className={classes["contact-box"]}>
                <form action="https://formsubmit.co/talalahq311@gmail.com" method="POST">
                    <div className={classes["inputbox"]}>
                        <label>Name</label>
                        <input type="text" name="name" required="required" />
                    </div>
                    <div className={classes.inputbox}>
                        <label>Email</label>
                        <input type="email" name="email" required="required" />
                    </div>
                    <div className={classes.inputbox}>
                        <label>Subject</label>
                        <input type="text" name="subject" required="required" />
                    </div>
                    <div className={classes.inputbox}>
                        <label>Type Your Message...</label>
                        <textarea name="message" id="message" rows="12" required="required"></textarea>
                    </div>
                    <div className={classes.submit}>
                        <button type="submit" value="Send" className={classes['submit-btn']}>Send!</button>
                    </div>

                    <input type="hidden" name="_next" value="https://talalahmed.vercel.app" />
                    <input type="hidden" name="_captcha" value="false" />

                </form>
            </div>
        </section>


    </>
}

export default Contact;