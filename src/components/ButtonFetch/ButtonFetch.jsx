import React from "react";
import App from "../../App";


const ButtonFetch = (props) => {
    return (<button onClick={App.getData}> Обновить данные</button>)
}

// export class ButtonFetch extends React.Component{
//     constructor (props){
//         super(props);
//         this.state ={
//             url: "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=250b53fdce5682befb2cfda95d58e3c1";
//             fetchData:{}
//         }
//     }

//         render(){
//             // <div>


//             // </div>
            
//         }
// } 

// const  = (props) => {

    
// }

export default ButtonFetch;