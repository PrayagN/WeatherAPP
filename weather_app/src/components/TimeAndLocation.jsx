import { formatToLocalTime } from "../services/weatherServices";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight sm:text-2xl">{formatToLocalTime(dt, timezone)}</p>
      </div>
      <div className="flex flex-col items-center justify-center my-3">
        <p className="text-white text-3xl font-medium sm:text-4xl">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
