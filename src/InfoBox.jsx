import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderStormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function InfoBox({weatherData}){
    

    let style={
      width: 395 ,
      padding:1.5,
      backgroundColor:'#dddddd',
      color:'#4baa0c',
      borderRadius:3,
      marginLeft:1,
      marginRight:1

      
    }
    return (
        <div className='InfoBox'>
            
            <Card sx={style}>
      <CardMedia
        sx={{ height: 210 }}
        image= {weatherData.description== 'clear sky'||weatherData.description=='Sunny' ? weatherData.temp>35?`/Hot weather.jpg`:weatherData.temp>25?`/Plesant weather.jpg`:`/Cold weather.jpg`:weatherData.description=='few clouds'||weatherData.description=='scattered clouds' ? `/Cloudy weather.jpg`: `/Rainy weather.jpg`}
        title="green iguana"
      />
      <CardContent sx={{padding:0}}>
        <Typography gutterBottom variant="h5" component="div">
          <h2>{weatherData.city}&nbsp;{weatherData.description=='Sunny'||weatherData.description=='clear sky'? weatherData.temp>25?<SunnyIcon/> :<AcUnitIcon/>:weatherData.description=='few clouds'|| weatherData.description=='scattered clouds'||weatherData.description=='broken clouds'? <CloudIcon/>:<ThunderStormIcon/>}</h2>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.primary' ,}} component="div">
           <h4 style={{marginBottom:10, fontSize:15}}>Description= {weatherData.description}</h4>
           <h4 style={{marginBottom:10, fontSize:15}}>Temperature= {weatherData.temp}&deg;C</h4>
           <h4 style={{marginBottom:10, fontSize:15}}>Maximum temperature= {weatherData.temp_max}&deg;C</h4>
           <h4 style={{marginBottom:10, fontSize:15}}>Minimum temperature= {weatherData.temp_min}&deg;C</h4>
           <h4 style={{marginBottom:10, fontSize:15}}>Feels Like= {weatherData.feels_like}&deg;C</h4>
           <h4 style={{marginBottom:10, fontSize:15}}>Humidity= {weatherData.humidity}</h4>
        </Typography>
      </CardContent>
       </Card>
        </div>
    );
}