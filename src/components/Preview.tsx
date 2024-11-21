// Preview.tsx
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useHouses } from "../apis/HouseProvider";

const Preview = () => {
  const houses = useHouses();
  const [currentHouseIndex, setCurrentHouseIndex] = useState(0);

  const goToPreviousHouse = () => {
    setCurrentHouseIndex((prevIndex) =>
      prevIndex === 0 ? (houses ? houses.length - 1 : 0) : prevIndex - 1
    );
  };

  const goToNextHouse = () => {
    setCurrentHouseIndex((prevIndex) =>
      houses && prevIndex === houses.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!houses || houses.length === 0) return <p>Loading houses...</p>;

  return (
    <div className="relative w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
      {/* Current House Preview */}
      <img
        src={houses[currentHouseIndex].imageURL}
        alt={houses[currentHouseIndex].name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h3 className="mt-4 text-xl font-bold text-gray-800">
        ${houses[currentHouseIndex].price}
      </h3>
      <p className="text-primary font-semibold">
        Location: {houses[currentHouseIndex].location}
      </p>
      <p className="text-sm text-gray-500">
        Beds: {houses[currentHouseIndex].beds} | Baths:{" "}
        {houses[currentHouseIndex].baths}
      </p>

      {/* Navigation Buttons */}
      <button
        onClick={goToPreviousHouse}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition-colors"
      >
        <FaArrowLeft /> {}
      </button>
      <button
        onClick={goToNextHouse}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition-colors"
      >
        <FaArrowRight /> {}
      </button>
    </div>
  );
};

export default Preview;
