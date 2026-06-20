import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import './WeatherApp.css';
import {useState} from 'react';

export default function WeatherApp(){
    const [weatherData, setWeatherData]= useState({
        city:'Delhi', 
        description:"few clouds",
        temp:"38.59", 
        temp_max:"38.59",
        temp_min:"38.59",
        feels_like:"39.78", 
        humidity:'28'
    });

        function setData(data){
            setWeatherData(data);
        }
    return (
        <div className='WeatherApp'>
            <h1 className='Website-name'>WhatIsTheWeather</h1>
            <SearchBox setData={setData}/>
            <InfoBox  weatherData={weatherData}/>
        </div>
        
    );
}