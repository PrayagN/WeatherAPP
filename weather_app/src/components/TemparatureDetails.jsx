import {
//   UilArrowUp,
//   UilArrowDown,
  UilTemperature,
  UilWind,
  UilSun,
  UilSunset,
  UilTear,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherServices";
function TemparatureDetails({weather:{details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}}) {
  return (
    <div>
      <div className="flex  justify-center py-2 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={iconUrlFromCode(icon) || 'https://e0.pxfuel.com/wallpapers/365/902/desktop-wallpaper-dark-mist-trees-forest-tablet-laptop-background-16864-dark-forest-laptop.jpg'}
          className="w-20"
          alt=""
        />
        <p className="text-5xl">{`${temp.toFixed()}`}&deg;</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center font-light text-sm">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1 ">{`${feels_like.toFixed()}`}&deg;</span>
          </div>

          <div className="flex items-center justify-center font-light text-sm">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1 ">{`${humidity.toFixed()}`}%</span>
          </div>
          <div className="flex items-center justify-center font-light text-sm">
            <UilWind size={18} className="mr-1" />
            Wind :<span className="font-medium ml-1 ">{`${speed.toFixed()}km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center space-x-2 text-white text-sm py-3">
        <UilSun/>
        <p className="font-light">Rise:<span className="font-medium ml-1">{formatToLocalTime(sunrise,timezone, "hh:mm a")}</span></p>
        <p>|</p>
        <UilSunset/>
        <p className="font-light">Set:<span className="font-medium ml-1">{formatToLocalTime(sunset,timezone, "hh:mm a")}</span></p>
        <p>|</p>
        <UilSun/>
        <p className="font-light">High:<span className="font-medium ml-1">{`${temp_max.toFixed()}`}&deg;</span></p>
        <p>|</p>
        <UilSun/>
        <p className="font-light">Low:<span className="font-medium ml-1">{`${temp_min.toFixed()}`}&deg;</span></p>
       
      </div>
    </div>
  );
}

export default TemparatureDetails;
