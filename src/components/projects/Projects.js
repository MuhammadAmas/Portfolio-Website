import React, { useState } from "react";
import classes from './Projects.module.css';

function Projects() {
    let d = new Date();
    var hour = d.getHours();
    let minutes = d.getMinutes();
    let meridian = 'am';

    if (hour >= 12) {
        hour = hour - 12;
        meridian = 'pm';
    }
    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    let time = `${hour} : ${minutes} ${meridian}`


    return <>
        <div className={classes.header}>
            <p style={{ ['marginBottom']: "0.8em" }}>
                📍 Karachi &nbsp;&nbsp; 🕐 {time}
            </p>
            <h1>
                Hola! I'm Talal <p style={{ opacity: "0.3", display: "inline" }}>✿</p> ML Engineer
            </h1>

            <p>
                A Machine learning Engineer and a AI Research Enthusiast who uses his skills for solving different problems in Computer Vision, Natural Language Processing and Data Analytics.
            </p>

        </div>
        <div className={classes['projects-container']}>

            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Audio-Classifier'}>
                    <img src='/project-images/audio classifier.png' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>Audio Classifier</h1>
                </div>
            </div>


            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Malaria-Cell-Detection-using-CNN'} target={'_blank'}>
                    <img src='/project-images/malairia.jpeg' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>Malairia Cell Detection</h1>
                </div>
            </div>


            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/TensorFlow/blob/main/04_Transfer_Learning_TensorFlowHub.ipynb'} target={'_blank'}>
                    <img src='/project-images/food.png' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>Food Classifier using Transfer Learning</h1>
                </div>
            </div>


            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Computer-Vision/tree/main/Object%20Detection%20using%20Tensorflow%20API'} target={'_blank'}>
                    <img src='/project-images/object detect.png' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>Object Detection TensorFlow API</h1>
                </div>
            </div>


            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Computer-Vision/tree/main/Neural%20Style%20transfer'} target={'_blank'}>
                    <img src='/project-images/neural style pic.png' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>Neural Style Transfer</h1>
                </div>
            </div>


            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Sign_Language_Detector'} target={'_blank'}>
                    <img src='/project-images/sign language detector.png' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>Sign Language Detector</h1>
                </div>
            </div>


            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Computer-Vision/tree/main/OCR'} target={'_blank'}>
                    <img src='/project-images/ocr.png' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>OCR</h1>
                </div>
            </div>

            {/* <div className={classes['project-item']}>
                <a href={'Github Repository link'} target={'_blank'}>
                    <img src='/project-images/add the image name with extension that you added' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>project name</h1>
                </div>
            </div> */}


        </div>

    </>
}


export default Projects;