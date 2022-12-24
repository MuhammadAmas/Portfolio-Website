import React from "react";
import classes from './Contact.module.css';

function Contact() {

    return <>
        <section className={classes["contact-me"]} id="let's-connect">
            <h1>LET'S CONNECT</h1>
            <div className={classes["contact-box"]}>
                <form action="https://formsubmit.co/amaswaseem@gmail.com" method="POST">
                    <div className={classes.inputbox}>
                        <input type="text" name="name" required="required" />
                        <label>Name</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input type="email" name="email" required="required" />
                        <label>Email</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input type="text" name="subject" required="required" />
                        <label>Subject</label>
                    </div>
                    <div className={classes.inputbox}>
                        <textarea name="message" id="message" rows="5" required="required"></textarea>
                        <label>Type Your Message...</label>
                    </div>
                    <div className={classes.submit}>
                        <button type="submit" value="Send" class="submit-btn">SEND</button>
                    </div>

                    <input type="hidden" name="_next" value="https://muhammadamas.netlify.app/thanks.html" />
                    <input type="hidden" name="_captcha" value="false" />

                </form>
            </div>
        </section>


    </>
}

export default Contact;