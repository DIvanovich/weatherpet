import React, { useState } from 'react';
import { setState } from 'react';
import './app.css';
import DivData from './components/DivData';
import CloudImage from './components/CloudImage/CloudImage';
import BackgroundPicture from './components/BackgroundPicture/BackgroundPicture';
import ButtonFetch from './components/ButtonFetch/ButtonFetch';
import Modal from './components/Modal/Modal';
import InputForm from './components/input/InputForm';
import classes from './components/BackgroundPicture/BackgroundPicture.module.css';

export class App extends React.Component{
      constructor (props){
          super();
          this.state = {
              fetchData: {"coord":{"lon":30.5167,"lat":50.4333},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"01n"}],"base":"stations","main":{"temp":22.62,"feels_like":21.98,"temp_min":22.03,"temp_max":22.62,"pressure":1014,"humidity":40},"visibility":10000,"wind":{"speed":0.45,"deg":132,"gust":2.24},"clouds":{"all":100},"dt":1662035159,"sys":{"type":2,"id":2003742,"country":"UA","sunrise":1662001923,"sunset":1662050667},"timezone":10800,"id":703448,"name":"Kyiv","cod":200},
              url: "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=250b53fdce5682befb2cfda95d58e3c1",
              city: 'Kyiv',
              bgdPicture: "4",
              bgdPath: "sun",
              //cloudImage: "rain_5",
              windImage: '03',
              loading: true,
              modal: false
          };
          // this.url = props.url;
          // console.log(this.url);
          console.log('this.state = -1');
          console.log(this.state);
          this.getData = this.getData.bind(this);
          this.submitCity = this.submitCity.bind(this);
          this.modalSwitch = this.modalSwitch.bind(this);
          this.getData("https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=250b53fdce5682befb2cfda95d58e3c1");
          
          
      }

      componentDidMount(){
        // if (this.state.city !== this.prevState.city){
          //  this.setState({ 
          //   'loading': false
          // });
        // }
        // this.getData("https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=250b53fdce5682befb2cfda95d58e3c1");
        // this.setStatesForRender();
       
      }
      componentDidUpdate(){
        this.state.loading && this.setState({'loading': false});
        
        // }
        // this.getData("https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=250b53fdce5682befb2cfda95d58e3c1");
        // this.setStatesForRender();
       
      }

      setStatesForRender(data){
        console.log('this.state before 4');
        console.log(data);
        
        // out.loading = false;
        
        const icon = data.weather[0].icon;
        console.log('icon' + icon);
        const description = data.weather[0].main;
        console.log('description' + description);
        let bgdPath = "";
        let bgdPicture = ""
        // console.log('bgdPath' + bgdPath);
        // console.log(out);

        const temp = data.main.feels_like;

        if (description == "Clouds") {
          bgdPath = "cloud";
        } else if (description == "Snow") {
          bgdPath = "snow";
        } else if (description == "Clear") {
          bgdPath = "sun";
        } else {
          bgdPath = "rain";
        };

        
        // out.bgdPicture = 1;
        // out.bgdPath = bgdPath;
        console.log("out bgdPath 5 =" + bgdPath);
        // console.log(out);
        
        const wind = data.wind.speed;
        console.log('wind' + wind);
        let windImage = 'o';
        if (wind<2) {
          windImage = (description == "Clear") ? '10': '00';         
        } else if (wind < 10) {
          windImage = (description == "Clear") ? '13': '03';
        } else {
          windImage = (description == "Clear") ? '15': '05';      
        };
        
        if (icon[2] == 'n') {
          bgdPicture = 3;
        } else if (temp > 25) {
            bgdPicture = 2;
        } else if (temp < 10) {
            bgdPicture = 4;
        } else {
            bgdPicture = 1;
        }
    
        // bgdPicture = (temp > 25) ? 2 : 1;
        
       

        // console.log('out.windImage' + windImage);
        // this.setState({ 
          //   'modal': false
          // });
          // this.setState({
          //   'bgdPicture': "1",
          //   'bgdPath' : bgdPath
          // })
        this.setState({
          
          'windImage' : windImage,
          'bgdPicture': bgdPicture,
          'bgdPath' : bgdPath,
          'modal': false,

        })
        console.log("out bgdPath 6 =" + bgdPath);
        console.log(this.state);
        // this.setState({out});
        // })
      }

      modalSwitch() {
        // let out = {};
        // out = this.state;
        // console.log(out.modal);
        let modal = (this.state.modal) ? false : true; 
        console.log("modal");
        // this.setState({out});
        this.setState({
          'modal' : modal
        });
        console.log("modal-close");

      }

      submitCity(city) {

      const url ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + city.value + "&appid=250b53fdce5682befb2cfda95d58e3c1";

      console.log('submitCity, setState01');
        this.setState({ 
          'city' : city.value,
          'loading' : true
         });
        console.log('submitCity, getData()');
        // 
        console.log('submitCity, setState02');
        // this.setState({ 
        //   'modal': false
        // });
        this.getData(url);
        console.log('submitCity, this.state 0 =');
        console.log(this.state);
        // this.setStatesForRender();
      }

      getData = (url) => {
        // console.log(this.url);
        // let out = {};
        // out = this.state;
        // out.loading = true;
        // this.setState({ 'loading': true });
        console.log('this.state - 1:');
        console.log(this.state);

        fetch(url)
            .then(response => {
              console.log('response 2:');
              console.log(response);
              // this.fetchData=response;
              // console.log(this.fetchData);
                if (response.ok){
                  console.log("response-ok");
                    return response.json();
                } else {
                    throw new Error ("Server sent error answer: " + response.status);
                }                 
            })               
            .then(json => {

              //  console.log('response 3:');
              //  console.log(json);
              //  let out = this.state;
              //  out.fetchData=json;
              console.log('json');
                console.log(json);
                this.setStatesForRender(json);
                this.setState({
                  'fetchData' : json
                }) ;
                
                return (this.state.fetchData)
                // this.fetchData=json;
                
                // console.log(this.state.fetchData.name);
                // data.name = this.state.fetchData.name;        
             })
            // .then((data) => {
            //   console.log('data');
            //   console.log(data);
            //   this.setStatesForRender(data);
              

            // })
              
              // let out = {};
              // out = this.state;
             
            // .then (this.setState({
            //   'loading': false,
            //   'windImage' : windImage,
            //   'modal': false

            // }))
            .catch(
                error => {
            alert('Check international name of your city: ' + error.message);
            });
            
      // };       
      };
  
      

      render() {
        
        // const city = this.state.city;
        // let data = [];
        // data = this.state.fetchData.weather[0];

        // let data3 = data.description;
        console.log("-----------------");

        console.log("render this.state 7 =");
              console.log(this.state);
        // console.log(data3);
        // console.log(this);
        // console.log(data);

        return (
          <div>
              <div className="container">  
                
                <div className='content' onClick={this.modalSwitch}>
                  <div className='contentData'>

                    <DivData text={`${Math.round(this.state.fetchData.main.temp)}°C`} size={'24px'}/>
                    <DivData text={this.state.fetchData.name} size={'30px'} />
                    <DivData text={this.state.fetchData.weather[0].main} size={'24px'}/>
                    <DivData text={`Feels: ${Math.round(this.state.fetchData.main.feels_like)}°C`} size={'24px'}/>
                    <DivData text={`Humidity: ${Math.round(this.state.fetchData.main.humidity)}%`} size={'24px'}/>
                    {/* <ButtonFetch/> */}
                    
                  </div>
                  <div className='weatherPicture'>

                    <CloudImage urlImg={`https://openweathermap.org/img/w/${this.state.fetchData.weather[0].icon}.png`} alt={this.state.fetchData.weather[0].description}/>
                    {/* <CloudImage urlImg={"img/cloud_rain_sun.png"} /> */}
                    <CloudImage urlImg={`img/umbrella_rain_${this.state.windImage}.png`} alt={this.state.fetchData.weather[0].description} />
                    <DivData text={`${this.state.fetchData.wind.speed} m/s`} size={'larger'}/>  
                  
                  </div>

                </div>

                  <BackgroundPicture urlBackground={`img/${this.state.bgdPath}/dog_${this.state.bgdPicture}.jpg`} />    
                  {this.state.modal && <Modal title='Enter your city' func2={this.modalSwitch}>
                    <InputForm city={this.state.city} func={this.submitCity} />
                  </Modal>} 
                  {this.state.loading && <BackgroundPicture classAdd={classes.loading} urlBackground={`img/Loading_3.gif`} alt={'Loading...'} />} 
              </div>
          </div>
      )}
  } 
  
export default App;
