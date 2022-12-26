import React from "react";
import classes from "./Thanks.module.css"


function Thanks() {

    return <>
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <h1>Thank You!</h1>
                <p>Your message has delivered. I will contact you ASAP.</p>
            </div>
            <div className={(classes.btn + " " + classes.subContainer)}>
                <button type="button" className={classes.btn}>
                    <a href="https://talalahmed.vercel.app">GO BACK</a>
                </button>
            </div>
        </div>
    </>

}

export default Thanks;