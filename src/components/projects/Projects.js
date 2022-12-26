import React from "react";
import classes from './Projects.module.css';

function Projects() {

    return <>
        <div className={classes.header}>
            <h1>
                Hola! I'm Talal <p style={{ opacity: "0.3", display: "inline" }}>✿</p> ML Engineer
            </h1>

            <p>
                A Machine learning Engineer and a AI Research Enthusiast who uses his skills for solving different problems in Computer Vision, Natural Language Processing and Data Analytics.
            </p>

        </div>
        <div className={classes['projects-container']}>

            <div className={classes['project-item']}>
                <img src='/project-images/audio classifier.png' />
                <div className={classes['project-desciption']}>
                    <h1>Audio Classifier</h1>
                    <a href={'https://github.com/TalalAhmed311/Audio-Classifier'}>View Code</a>
                </div>
            </div>


            <div className={classes['project-item']}>
                <img src='/project-images/malairia.jpeg' />
                <div className={classes['project-desciption']}>
                    <h1>Malairia Cell Detection</h1>
                    <a href={'https://github.com/TalalAhmed311/Malaria-Cell-Detection-using-CNN'} target={'_blank'}>View Code</a>
                </div>
            </div>


            <div className={classes['project-item']}>
                <img src='/project-images/food.png' />
                <div className={classes['project-desciption']}>
                    <h1>Food Classifier using Transfer Learning</h1>
                    <a href={'https://github.com/TalalAhmed311/TensorFlow/blob/main/04_Transfer_Learning_TensorFlowHub.ipynb'} target={'_blank'}>View Code</a>
                </div>
            </div>


            <div className={classes['project-item']}>
                <img src='/project-images/neural style pic.png' />
                <div className={classes['project-desciption']}>
                    <h1>Neural Style Transfer</h1>
                    <a href={'https://github.com/TalalAhmed311/Computer-Vision/tree/main/Neural%20Style%20transfer'} target={'_blank'}>View Code</a>
                </div>
            </div>


            <div className={classes['project-item']}>
                <img src='/project-images/object detect.png' />
                <div className={classes['project-desciption']}>
                    <h1>Object Detection TensorFlow API</h1>
                    <a href={'https://github.com/TalalAhmed311/Computer-Vision/tree/main/Object%20Detection%20using%20Tensorflow%20API' } target={'_blank'}>View Code</a>
                </div>
            </div>


            <div className={classes['project-item']}>
                <img src='/project-images/ocr.png' />
                <div className={classes['project-desciption']}>
                    <h1>OCR</h1>
                    <a href={'https://github.com/TalalAhmed311/Computer-Vision/tree/main/OCR' } target={'_blank'}>View Code</a>
                </div>
            </div>


            <div className={classes['project-item']}>
                <img src='/project-images/sign language detector.png' />
                <div className={classes['project-desciption']}>
                    <h1>Sign Language Detector</h1>
                    <a href={'https://github.com/TalalAhmed311/Sign_Language_Detector'} target={'_blank'}>View Code</a>
                </div>
            </div>


        </div>

    </>
}


export default Projects;