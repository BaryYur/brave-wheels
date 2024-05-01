import { useEffect, useState } from "react";

import axios from "axios";

const mainPath = import.meta.env.VITE_API_PATH;

export const useGetMaxPrice = () => {
  const [maxPrice, setMaxPrice] = useState(0);

  const getMaxPrice = async () => {
    try {
      const { data } = await axios.get(`${mainPath}/bicycle/maxPrice`);

      setMaxPrice(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMaxPrice();
  }, []);

  return maxPrice;
};
