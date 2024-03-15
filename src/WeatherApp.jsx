 import SearchBox from "./SearchBox";
 import InfoBox from "./InfoBox";
 import { useState } from "react";
 import "./App.css";


 
 export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city : "india",
        temp : 27.05,
        tempMin : 27.05,
        tempMax : 27.05,
        humidity: 21,
        feelsLike: 26.15,
        weather : "clear Sky",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>WEATHER APP </h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox  info={weatherInfo} />
        </div>
    );
}