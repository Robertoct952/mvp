import { useEffect, useState } from "react";

const Houses = () => {
  const [houses, setHouses] = useState([]);

  // Fetch data from MockAPI
  useEffect(() => {
    fetch("https://65a053cd600f49256fafd871.mockapi.io/Houses") // Replace with your MockAPI URL
      .then((response) => response.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {houses.map((house: any) => (
        <div key={house.id} className="border p-4 rounded shadow-lg">
          <img
            src={house.imageURL}
            alt={house.name}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-4 text-xl font-bold">{house.name}</h3>
          <p className="text-gray-600">Location: {house.location}</p>
          <p className="text-gray-600">Price: ${house.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Houses;
