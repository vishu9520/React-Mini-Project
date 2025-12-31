import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox(){
    const INIT_URL="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let info ={
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    };
    return(
        <div className="InfoBox">
            <h1>WeatherInfi - {info.weather}</h1>
            <div className='cardConatainer'>
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
        <div>Temperature = {info.temp}&deg;C</div>
        <div>Humidty = {info.humidity}</div>
        <p>Min Temo = {info.tempMin}&deg;C</p>
         <p>Max Temo = {info.tempMax}&deg;C</p>
         <p>The weather is described as <i> {info.weather}</i> Feels Like {info.feelslike}&deg;C</p>

        </Typography>
      </CardContent>
     
    </Card>
            </div>
            
        </div>
    );
}