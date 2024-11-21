import { FaHeart } from "react-icons/fa";
import { useHouses } from "../apis/HouseProvider";

const Houses = () => {
  const houses = useHouses();

  if (!houses || houses.length === 0) return <p>Loading houses...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {houses.map((house) => (
        <div
          key={house.id}
          className="relative border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white"
        >
          {/* Favorite Icon */}
          <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors">
            <FaHeart size={24} /> {}
          </button>

          {/* House Image */}
          <img
            src={house.imageURL}
            alt={house.name}
            className="w-full h-56 object-cover"
          />

          {/* House Details */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              ${house.price}
            </h3>
            <p className="text-primary font-semibold text-sm mb-1">
              Location: {house.location}
            </p>
            <p className="text-gray-600 mb-3">{house.name}</p>
            <p className="text-sm text-gray-500">
              Beds: {house.beds} | Baths: {house.baths}
            </p>

            {/* Button to view details */}
            <button className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-secondary transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Houses;
