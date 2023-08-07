function TopButton({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: 'America',
    },
    {
      id: 2,
      title: 'Australia',
    },
    {
      id: 3,
      title: 'Delhi',
    },
    {
      id: 4,
      title: 'Vancouver',
    },
    {
      id: 5,
      title: 'Kannur',
    },
  ];

  return (
    <div className="flex flex-wrap  space-x-4 ">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => {
            setQuery({ q: city.title });
          }}
          className="text-white text-lg font-medium  px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition duration-300"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
