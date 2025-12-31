import {useState} from "react";
import SearchBox from "./SearchBox";
import InfoBox  from "./InfoBox";
export default function WeatherApp(){
    const [weatherinfo,setWeatherInfo]= useState({
        city:"Meerut",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
    
    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Vishu </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info ={weatherinfo}/>
        </div>
    );
}