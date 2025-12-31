import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const Hot_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const COLD_URL="https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const RAIN_URL="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return(
        <div className="InfoBox">
           
            <div className='cardConatainer'>
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ?RAIN_URL:info.temp>15
          ?Hot_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity>80
          ?<ThunderstormIcon/>:info.temp>15
          ?<SunnyIcon/>:<SevereColdIcon/>}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
        <div>Temperature = {info.temp}&deg;C</div>
        <br />ggg
        <div>Humidty = {info.humidity}</div>

        <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The weather is described as <i> {info.weather}</i> Feels Like {info.feelslike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
            </div>
        </div>
    );
}