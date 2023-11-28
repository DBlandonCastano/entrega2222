
import './App.css'
import axios from 'axios'
import { useState,useEffect } from 'react';
import WeatherDetaill from './component/WeatherDetaill';
function App() {
  //? 
  const [weather, setWeather] = useState(null);
  const success = (pos) => {     //posicionamiento geologico
    // console.log(pos);
    // const lat=pos.coords.latitude;
    const {
      coords: { latitude, longitude }, //desestructurar coords
    } = pos; //desestructurar pos donde se capturo valores de posicionamiento
    //peticiones con axios
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3fba95c2db9be8ae22dbe5e3981634a5&lang=sp&units=metric`
      )
      .then(({data})=>setWeather(data))
      .catch((err)=>console.log(err));
    //console.log(latitude, longitude);
  }
  //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  //success callback 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])
  return (
    <main className='flex justify-center items-center h-screen  text-white bg-[url(/images/diasol.avif)] bg-no-repeat bg-cover'>
      {weather?<WeatherDetaill weather={weather} />: <span>Cargando...</span>}   
    </main>
  ); 
}
export default App
