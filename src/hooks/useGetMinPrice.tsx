import { useEffect, useState } from "react";

import axios from "axios";

const mainPath = import.meta.env.VITE_API_PATH;

export const useGetMinPrice = () => {
  const [minPrice, setMinPrice] = useState(0);

  const getMinPrice = async () => {
    try {
      const { data } = await axios.get(`${mainPath}/bicycle/minPrice`);

      setMinPrice(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMinPrice();
  }, []);

  return minPrice;
};
