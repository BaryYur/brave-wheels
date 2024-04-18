import axios from "axios";

import React, { useState } from "react";

import { Bike } from "../types";

type BikeContextTypes = {
  currentBikes: Bike[];
  getAllBikesByPagination: (size: string, page: string) => void;
  getBike: (id: string) => Promise<"success" | "error">;
  deleteBike: (id: string) => void;
  bike: Bike | null;
  viewedBikes: Bike[];
  getRecentlyViewedBikes: (ids: string[]) => void;
  getFilteredBikes: (filters: string) => void;
  searchBikeItems: (text: string) => void;
  catalogItemsLoading: boolean;
}

const BikeContext = React.createContext({
  // @ts-ignore
  getAllBikesByPagination: (size, page) => {}, // @ts-ignore
  getBike: (id) => {}, // @ts-ignore
  deleteBike: (id) => {}, // @ts-ignore
  getRecentlyViewedBikes: (ids) => {},  // @ts-ignore
  getFilteredBikes: (filters) => {},   // @ts-ignore
  searchBikeItems: (text) => {},
} as BikeContextTypes);

const mainPath = "https://bicycleapi.onrender.com/api";

export const BikeContextProvider = ({ children } : { children: React.ReactNode }) => {
  const [bike, setBike] = useState<Bike | null>(null);
  const [currentBikes, setCurrentBikes] = useState([]);
  const [viewedBikes, setViewedBikes] = useState<Bike[]>([]);
  const [catalogItemsLoading, setCatalogItemsLoading] = useState(false);

  const getBike = async (id: string) => {
    try {
      const { data } = await axios.get(`${mainPath}/bicycle/${id}`);

      setBike(data);

      return "success";
    } catch (error) {
      console.log(error);
      return "error";
    }
  }

  const getAllBikesByPagination = async (size: string, page: string) => {
    setCatalogItemsLoading(true);

    try {
      const { data } = await axios.get(`${mainPath}/bicycle/page-request?size=${size}&page=${page}`);

      setCurrentBikes(data.content);
    } catch (error) {
      console.log(error);
    } finally {
      setCatalogItemsLoading(false);
    }
  }

  const deleteBike = async (id: string) => {
    try {
      await axios.delete(`${mainPath}/bicycle/delete/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  const getRecentlyViewedBikes = async (ids: string[]) => {
    try {
      const { data } = await axios.get(`${mainPath}/bicycle/all?ids=${ids}`);

      setViewedBikes(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getFilteredBikes = async (filters: string) => {
    setCatalogItemsLoading(true);

    try {
      const { data } = await axios.get(`${mainPath}/bicycle/filter${filters}`);

      setCurrentBikes(data);
    } catch (error) {
      // console.log(error);
    } finally {
      setCatalogItemsLoading(false);
    }
  }

  const searchBikeItems = async (text: string) => {
    setCatalogItemsLoading(true);

    try {
      const { data } = await axios.get(`${mainPath}/bicycle/search?input=${text}`);

      setCurrentBikes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setCatalogItemsLoading(false);
    }
  }

  return (
    <BikeContext.Provider
      value={{
        getAllBikesByPagination ,
        getBike,
        deleteBike,
        currentBikes,
        bike,
        viewedBikes,
        getRecentlyViewedBikes,
        getFilteredBikes,
        searchBikeItems,
        catalogItemsLoading,
      }}
    >
      {children}
    </BikeContext.Provider>
  );
}

export default BikeContext;