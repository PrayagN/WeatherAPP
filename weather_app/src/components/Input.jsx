import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";
import { toast } from "react-toastify";

function Input({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching user's location.");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          toast.success("Location fetched!");
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setQuery({ lat, lon });
        },
        (error) => {
          toast.error("Failed to fetch location.");
          console.error(error);
        }
      );
    } else {
      toast.error("Geolocation is not available in this browser.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center my-6">
      <div className="flex flex-col sm:flex-row w-full sm:w-3/4 items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 rounded-lg">
        <input
          type="text"
          className="text-xs font-light p-2 w-full sm:w-auto shadow-lg focus:outline-none capitalize placeholder-lowercase rounded-xl"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="flex flex-row space-x-4 sm:space-x-0">
          <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
          <UilLocationPoint
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full sm:w-1/4 mt-4 sm:mt-0 items-center justify-center">
        <button
          onClick={handleUnitsChange}
          name="metric"
          className={`text-xl text-white font-light mx-1 ${
            units === "metric" ? "underline" : ""
          }`}
        >
          &deg;C
        </button>
        <p className="text-white hidden sm:block">|</p>
        <button
          onClick={handleUnitsChange}
          name="imperial"
          className={`text-xl text-white font-light mx-1 ${
            units === "imperial" ? "underline" : ""
          }`}
        >
          &deg;F
        </button>
      </div>
    </div>
  );
}

export default Input;
