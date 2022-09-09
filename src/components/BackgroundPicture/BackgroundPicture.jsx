import React from "react";
import classes from './BackgroundPicture.module.css';

const BackgroundPicture = (props) => {

    let classAdd = props.classAdd;
    console.log(classAdd);

    let classBack = (classAdd) ? classAdd : classes.picturesBgd;
    // props.classAd && classBack += props.classAdd;
    
    // classBack="classAdd"></props>


    return (
       
        // <div style={{ left: `${props.aline}`, top: `${props.aline}`, transform: `translateX(-${props.aline})`}} {className = {classes.classBack}}></div>
        <div style={{ left: `${props.aline}`, top: `${props.aline}`, transform: `translateX(-${props.aline})`}} className = {classBack} >
            <img src={props.urlBackground}  alt={props.alt}></img>
        </div>


    )
}


export default BackgroundPicture;