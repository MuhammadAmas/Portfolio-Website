import React from "react";
import classes from "./About.module.css";
import picture from '../../assets/profile-picture.png';
function About() {
    return <>
        <div className={classes['about-container']}>
            <div className={classes['about']}>
                <h1>Welcome to my little corner to know me ✸ </h1>
                <br />

                <p>I am Talal Ahmed a Machine learning Engineer working at Liquid Technologies. A person who loves Machine learning but why? Because of philosophy, Empiricism is something that talks about learning from experiences and I found Machine learning a modern way that helps us to understand our noumenal world.</p>
                <br />
                <p>Exploring cutting edge computer vision based application interested in Object Detection and Image Segmentation. Also a geek who is interested in AI Research on Medical Image Segmentation</p>
                <br />

                <p></p>I've implemented different research papers all the code and my side projects are available on GitHub.
                <br />


                <br />
                <h3>Areas of Interest:</h3>
                <p>
                    Machine learning
                    <br />
                    ML Research
                    <br />
                    Deep learning
                    <br />
                    Medical Imaging
                    <br />
                    Computer Vision
                    <br />
                    NLP
                </p>
            </div>
            <div className={classes['profile-picture']}>
                <img src={picture}></img>
            </div>
        </div>
    </>
}

export default About;