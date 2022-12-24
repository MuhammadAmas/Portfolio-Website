import React from "react";
import classes from './Contact.module.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Contact() {

    return <>
        <section className={classes["contact-me"]} id="let's-connect">
            <div className={classes["contact-header"]} >
                <h1>Drop me a note over here ⇢ </h1>
                {/* <FontAwesomeIcon icon={brands('twitter')} /> */}
            </div>
            <div className={classes["contact-box"]}>
                <form action="https://formsubmit.co/amaswaseem@gmail.com" method="POST">
                    <div className={classes.inputbox}>
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
                        <textarea name="message" id="message" rows="5" required="required"></textarea>
                    </div>
                    <div className={classes.submit}>
                        <button type="submit" value="Send" class="submit-btn">Send!</button>
                    </div>

                    <input type="hidden" name="_next" value="https://muhammadamas.netlify.app/thanks.html" />
                    <input type="hidden" name="_captcha" value="false" />

                </form>
            </div>
        </section>


    </>
}

export default Contact;