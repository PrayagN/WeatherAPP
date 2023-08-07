import { iconUrlFromCode } from "../services/weatherServices";

function Forecast({ title, items }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center justify-center my-3 sm:my-0">
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()} °`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
