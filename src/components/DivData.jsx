import React from "react";

const DivData = ({text, size}) => {
    // console.log(text);
    return (
        <div className="DivData">
           <p style={{ fontSize: `${size}` }}> {text}</p>
          
        </div>
    )
}

export default DivData;