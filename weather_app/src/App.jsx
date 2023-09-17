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
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
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
    if (!weather)
      return "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-johannes-plenio-1118873.jpg&fm=jpg";

    const { details } = weather;
    // const value = units === 'metric' ? 15 : 50;

    // Check the specific weather conditions and return the appropriate image URLs
    // if (temp <= value) {
    if (details === "Clear") {
      return "../src/assets/clear.avif";
    } else if (details === "Rain") {
      return "../src/assets/rain.avif";
    } else if (details === "Clouds") {
      return "../src/assets/clouds.avif";
    } else if (details === "Haze") {
      return "../src/assets/haze.avif";
    } else if (details === "Mist") {
      return "../src/assets/mist.jpg";
    } else {
      return "https://i.pinimg.com/originals/47/76/e1/4776e163cc466942ab43871f39630eba.gif";
    }
   
  };

  return (
    <div className="w-full h-screen relative">
     <div
        className="absolute top-0 left-0 w-full h-screen "
        style={{
          backgroundImage: `url(${changeBackground()})`,
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full   flex flex-col items-center justify-center">
        <div className="mx-auto mt-4 px-4 sm:px-6 lg:px-8 bg-transparent h-fit shadow-xl backdrop-blur-sm">
          <TopButton setQuery={setQuery} />
          <Input setQuery={setQuery} units={units} setUnits={setUnits} />
          {weather && (
            <div className="">
              <TimeAndLocation weather={weather} />
              <TemparatureDetails weather={weather} />
              <Forecast title="hourly forecast" items={weather.hourly} />
              <Forecast title="daily forecast" items={weather.daily} />
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
