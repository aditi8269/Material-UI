/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
    // const INIT_IMG = "https://images.pexels.com/photos/1245066/pexels-photo-1245066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    let COLD_URL="https://images.unsplash.com/photo-1619587438510-e5a857bf035a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let WARM_URL= "https://images.unsplash.com/photo-1506854309843-995c2c241f8d?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     let RAIN_URL ="https://images.unsplash.com/photo-1566927540107-c49dc3e7401a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="info-box">
            <h3>Weather Information : {info.weather}</h3>
            <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                   sx={{ height: 140 }}
                   image={info.humidity>80? RAIN_URL: info.temp>15? WARM_URL:COLD_URL}
                  title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div"> 
                    {info.city} 
                    {info.humidity>80
                    ? <ThunderstormIcon/>: info.temp >15? <WbSunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <p> Temperature :{info.temp}&deg;c</p>
                      <p> Minimum Temperature :{info.tempMin}&deg;c</p>
                      <p>Maximum Temperature :{info.tempMax}&deg;c</p>
                      <p> Humidity : {info.humidity}% </p>
                      <p> The Weaather can be describes as {info.weather} and feels like{info.feelsLike}&deg;c</p>
                   </Typography>
                  </CardContent>
                </Card>
              </div>
        </div>
    );
}
