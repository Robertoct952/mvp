import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface House {
  id: string;
  imageURL: string;
  name: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
}

interface HousesProviderProps {
  children: ReactNode;
}

const HousesContext = createContext<House[] | null>(null);

export const HousesProvider: React.FC<HousesProviderProps> = ({ children }) => {
  const [houses, setHouses] = useState<House[] | null>(null);

  useEffect(() => {
    fetch("https://65a053cd600f49256fafd871.mockapi.io/Houses")
      .then((response) => response.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <HousesContext.Provider value={houses}>{children}</HousesContext.Provider>
  );
};

export const useHouses = () => useContext(HousesContext);
