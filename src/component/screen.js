import '../App.css';
import React from 'react';
import axios from 'axios';

function Weather() {

  const [input, setInput] = React.useState("");
  const [cityName, setCityName] = React.useState("gafsa");
  const [weatherData, setWeatherData] = React.useState({});

  function getWeather() {
         // const cityName = document.getElementById("cityName").value;
        setCityName(input)
        //setWeatherData({});
  }

  const getWeath=()=>{
    if(!cityName){
        alert("add city") 
    }
    else{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=429736441cf3572838aa10530929f7cd&units=metric`)
      .then(res => {
        const newWeatherData = res.data;
        console.log("api data: ");
        console.log(newWeatherData)
        setWeatherData(newWeatherData);
      });
    }
  }
    
  React.useEffect(() => {
    getWeath();

  }, [cityName]);


  return (

    <div id="main" className="mainn">
    <div className="App">
     <br />
     <br/>
     <br/>
     <br/>

      <input type="text" id="cityName" className={"input"} onChange={(e)=>setInput(e.target.value)} placeholder={cityName} />
<br />
      <button className={"btn"} onClick={getWeather} > Get Weather </button>
      <br />
      {(weatherData.main && weatherData.main.temp) ?

        <div style={{marginTop: "25px",textAlign: "center"}}>
         
          <h1 className={"temp"}>Temperature {weatherData.main.temp}</h1>

          <h6 className={"temp"} > H: {weatherData.main.temp_min} / L: {weatherData.main.temp_max} </h6>
          <h6 className={"temp"}>Humidity: {weatherData.main.humidity}</h6>
          <h4 className={"temp"}>{weatherData.name}</h4>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>

        :

        <h1>Loading...</h1>
        
      }


    </div>
    </div>
  );
}

export default Weather;