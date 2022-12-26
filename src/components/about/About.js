import React from "react";
import classes from "./About.module.css";
import picture from '../../assets/profile-picture.png';
import resume from "../../assets/Talal Ahmed Resume.pdf";

function About() {
    return <>
        <div className={classes['about-container']}>
            <div className={classes['about']}>
                <h1>Welcome to my little corner to know me ✸ </h1>

                <br />

                <p><b>Bonjour! </b>I am Talal Ahmed a Machine learning Engineer. A person who loves Machine learning but why? Because of philosophy, Empiricism is something that talks about learning from experiences and I found Machine learning a modern way that helps us to understand our noumenal world.</p>

                <br />

                <p>Exploring cutting edge computer vision based application interested in Object Detection and Image Segmentation. Also a geek who is interested in AI Research on Medical Image Segmentation</p>

                <br />

                <p></p>I've implemented different research papers all the code and my side projects are available on <a href={"https://github.com/TalalAhmed311"} target={"_blank"}><u>GitHub</u></a>.

                <br />
                <br />

                <h4>Skills:</h4>

                <p>Image Processing, Computer Vision, NLP, Image Segmentation, Object Detection,
                    Tensorflow, Pytorch, Sklearn, SQL, Scipy, NLTK,  OpenCV, YoloV5, Yolov7, UNET.
                </p>

                <br />

                <h4>Areas of Interest:</h4>
                <p>
                    Machine learning, ML Research, Deep learning, Medical Imaging, Computer Vision, NLP.
                </p>

                <br />
                <br />

                <p><a href={resume}> <u>RESUME</u></a></p>

                <br />

                <p>Feel free to reach me at talalahq311@gmail.com or connect on <a href={"https://www.linkedin.com/in/talal-ahmed-a5479917b"} target={"_blank"}><u>LinkedIn</u></a> ✿</p>
            </div>

            <div className={classes['profile-picture']}>
                <img src={picture}></img>
            </div>


        </div>
    </>
}

export default About;