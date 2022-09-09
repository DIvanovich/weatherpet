import React from "react";
import DivData from "../DivData";
import classes from './CloudImage.module.css';

const CloudImage = (props) => {

    return (
        <div className={classes.cloudImage}>
            <img src={props.urlImg} alt={props.alt}></img>      
        </div>
    )
}

export default CloudImage;