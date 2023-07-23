/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Input from "./components/Input";
import TemparatureDetails from "./components/TemparatureDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButton from "./components/TopButton";
import getFormattedWeatherData from "./services/weatherServices";
// import { DateTime } from "luxon";
function App() {

  const [query,setQuery] = useState({q:'berlin'})
  const [units,setUnits] = useState('metric')
  const [weather,setWeather] = useState(null)
  // const [time,setTime] = useState('')
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);

        // Calculate and set the local time here after successfully setting the weather state
       
      });
    };
    fetchWeather();
  }, [query, units]);
  console.log(weather);
  
  // const { timezone, dt } = weather || {};

  // const formatToLocalTime = (secs, zone) => {
  //   return DateTime.fromSeconds(secs).setZone(zone).toFormat("hh:mm a");
  // };
 
  const changeBackground = () => {
    if (!weather) return 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-johannes-plenio-1118873.jpg&fm=jpg';
  
    const { details} = weather;
    // const value = units === 'metric' ? 15 : 50;
  
    // Check the specific weather conditions and return the appropriate image URLs
    // if (temp <= value) {
      if (details === 'Clear') {
        return 'https://wallpapers.com/images/hd/perfect-weather-with-gradient-sky-ym0nn79vhoqg34v3.jpg';
      } else if (details === 'Rain') {
        return 'https://i.pinimg.com/originals/41/b6/82/41b68262aeeaf353ae83fa8b4954e478.gif';
      } else if (details === 'Clouds') {
        return 'https://wallpaperaccess.com/full/535628.jpg';
      } else if (details === 'Haze') {
        return 'https://cdn.wallpapersafari.com/36/5/mfsEjg.gif';
      } else if (details === 'Mist') {
        return 'https://e0.pxfuel.com/wallpapers/365/902/desktop-wallpaper-dark-mist-trees-forest-tablet-laptop-background-16864-dark-forest-laptop.jpg';
      } else {
        return 'https://i.pinimg.com/originals/47/76/e1/4776e163cc466942ab43871f39630eba.gif';
      }
    // } else {
    //   return 'https://i.pinimg.com/originals/47/76/e1/4776e163cc466942ab43871f39630eba.gif';
    // }
  };
  
  
  return (
    <div className="w-full h-screen items-center bg-black">
  <img
    src={changeBackground()}
    className="w-full"
    alt=""
  />
  <div className="absolute top-0 left-0 w-full h-full  flex flex-col items-center justify-center">
    <div className="mx-auto mt-4 py-5 px-32 bg-transparent h-fit shadow-xl backdrop-blur-sm">
      <TopButton setQuery={setQuery} />
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemparatureDetails weather={weather} />
          {/* <Forecast title="hourly forecast" /> */}
          {/* <Forecast title="daily forecast" /> */}
          {/* <h1>{formatToLocalTime(dt, timezone)}</h1> */}
        </div>
      )}
    </div>
  </div>
</div>

  

  );
}

export default App;
