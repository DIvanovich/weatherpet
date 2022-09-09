import React, {useState} from "react";
import classes from './InputForm.module.css';
// import App from "../../App";

// class InputForm  extends React.Component{
//     constructor (props) {
//         super(props);
//         this this.state

//     }

const InputForm = ({city, func}) => {

    const [value, setValue] = useState(city);
    const funcSet = func.bind(this);
    // const value = city;

    // function subInput(e) {
    //     this.setState({city: value});
    //   }

    const submitForm = (e) => {
        e.preventDefault();
        funcSet({value});
        // func();
        
        
        // console.log(this.value);
      }

    function inputChange (e) {
        setValue(e.target.value)
    }
   
    return (
    <form onSubmit={submitForm}> 

        <input type="text" 
            className={classes.InputForm} 
            placeholder={'Enter international name of your city'} 
            value={value} 
            required
            onChange={inputChange}
        />
        <button className={classes.btn} type="submit">OK</button>
        {/* <button onClick={funcSet({value})}></button> */}
    
    </form>
           

          
       
    )
}

export default InputForm;