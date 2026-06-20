import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';
import {useState} from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



const apiKey= import.meta.env.VITE_API_key;


export default function SearchBox({setData}){
    
    let[city, setCity]= useState('');
    let [error, setError]= useState(false);
    let [EmptySubmit, setEmptySubmit]= useState(false);

    let geocoding_API_URL='https://api.openweathermap.org/geo/1.0/direct';
    let weather_API_URL='https://api.openweathermap.org/data/2.5/weather';
    

    async function getCityCoordinates(){
        setError(false);
        try{
        let response= await fetch(`${geocoding_API_URL}?q=${city}&limit=1&appid=${apiKey}`);
        let data= await response.json();
        let lat= data[0].lat;
        let lon= data[0].lon;
        let coordinates= [lat, lon];
        console.log(city);
        return coordinates;
        } catch(err){
            {city==''?setEmptySubmit(true):setError(true)}
        }
    }
    

    function handleCityChange(event){
       setCity(event.target.value);
    }

    async function handleSubmit(event){
        console.log(city);
        {city==null?setEmptySubmit(true):null}
        event.preventDefault();
        setCity('');
        let coordinatesArr=await getCityCoordinates();
        let response= await fetch(`${weather_API_URL}?lat=${coordinatesArr[0]}&lon=${coordinatesArr[1]}&appid=${apiKey}&units=metric`);
        let weather= await response.json();
        console.log(weather);
        let weatherData= {
            city:`${city}`,
            feels_like:`${weather.main.feels_like}`,
            humidity:`${weather.main.humidity}`,
            temp:`${weather.main.temp}`,
            temp_max:`${weather.main.temp_max}`,
            temp_min:`${weather.main.temp_min}`,
            description:`${weather.weather[0].description}`
        }
        console.log(weatherData);
        setData(weatherData);
    }
    return (
        <div className='SearchBox'>
           
           <form onSubmit={handleSubmit}>
              <TextField    sx={{bgcolor:'#f8fafc'}}  id="cityName" label="City Name" variant="outlined"  value={city} onChange={handleCityChange} />
              <br></br><br></br>
              <Button variant="contained" type='submit' >Search</Button>
           </form><br></br>
           <Stack sx={{ alignItems: 'center' }}>
           {error == true ? <Alert variant="filled" severity="info"    onClose={() => {setError(false)}}>
        This Place does not exist in API 
      </Alert> : EmptySubmit==true? <Alert variant="filled" severity="info"  onClose={() => {setEmptySubmit(false)}}>
        Please enter a Palce to find Weather
      </Alert> :null}
      
      </Stack>
        </div>
        
    );
}