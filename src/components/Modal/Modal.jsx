import React from "react";
import classes from './Modal.module.css';


// interface ModalProps {
//     children: React.ReactNode
// }

const Modal = ({ children, func2 }) => {
    const on = func2;
    // console.log(text);
    return (
        <>
            <div className={classes.ModalWindow} onClick={on}>
            </div>
            <div className={classes.ModalWindowChild}>
            <h1>Enter your city</h1>
            { children }
            </div>
            

        </>
    )
}

export default Modal;

// const Modal = ({text, size}) => {
//     console.log(text);
//     return (
//         <>
//             <div className="ModalWindow">
//             <p style={{ fontSize: `${size}` }}> {text}</p>
            
//             </div>
            
//         </>
//     )
// }