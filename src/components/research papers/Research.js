import React from "react";
// import classes from 'Research.module.css';
import classes from '../projects/Projects.module.css';

function Research() {

    return <>

        <div className={classes["research-paper-header"]}>
            <h1>
                Research papers 📖
            </h1>

            <p>
                The research literature in AI research is coming way faster than ever before. I try to be part of this remarkable research space and thought replicating existing papers is a good start.
            </p>

        </div>
        <div className={classes['projects-container']}>

            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Attention-is-all-you-Need'}>
                    <img src='/research-papers-images/Transformer.jpeg' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>Transformer</h1>
                </div>
            </div>

            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Research/tree/main/vgg16'}>
                    <img src='/research-papers-images/vgg16.jpg' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>VGG16</h1>
                </div>
            </div>

            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Research/tree/main/ConvNets'}>
                    <img src='/research-papers-images/ConvNet for 2020.png' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>ConvNet for 2020's</h1>
                </div>
            </div>

            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Research/tree/main/GANss'}>
                    <img src='/research-papers-images/Generative Adversarial Networks.jpeg' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>Generative Adversarial Networks</h1>
                </div>
            </div>

            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Research/tree/main/Inception'}>
                    <img src='/research-papers-images/Inception Model.png' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>Inception Model</h1>
                </div>
            </div>

            <div className={classes['project-item']}>
                <a href={'https://github.com/TalalAhmed311/Research/tree/main/ResNet50'}>
                    <img src='/research-papers-images/ResNet50.png' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>ResNet50</h1>
                </div>
            </div>



            {/* <div className={classes['project-item']}>
                <a href={'Github Repository link'}>
                    <img src='/research-papers-images/add the image name with extension that you added' />
                </a>
                <div className={classes['project-desciption']}>
                    <h1>Research paper name</h1>
                </div>
            </div> */}

        </div>


    </>
}

export default Research;