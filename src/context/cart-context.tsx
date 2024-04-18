import axios from "axios";

import React, { useState, useEffect } from "react";

import { Bike } from "../types";

type CartContextTypes = {
  getCartBikeItems: (ids: string[]) => Promise<"success" | "error">;
  fetchingCartItems: () => void;
  cartBikes: Bike[];
  cartItems: Bike[];
  deleteCartItem: (id: string) => void;
  addLocalQuantity: () => void;
  getAllItemsPrice: () => void;
  allItemsPrice: number;
  loading: boolean;
}

const CartContext = React.createContext({
  // @ts-ignore
  getCartBikeItems: (ids) => {},
  fetchingCartItems: () => {},
  // @ts-ignore
  deleteCartItem: (id) => {},
  addLocalQuantity: () => {},
} as CartContextTypes);

const mainPath = "https://bicycleapi.onrender.com/api";

export const CartContextProvider = ({ children } : { children: React.ReactNode }) => {
  const [cartBikes, setCartBikes] = useState<Bike[]>([]);
  const [cartItems, setCartItems] = useState<Bike[]>([]);
  const [allItemsPrice, setAllItemsPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  const getCartBikeItems = async (ids: string[]) => {
    try {
      const { data } = await axios.get(`${mainPath}/bicycle/all?ids=${ids}`);

      setCartBikes(data);

      return "success";
    } catch (error) {
      console.log(error);
      return "error";
    }
  }

  const deleteCartItem = (id: string) => {
    const cartItems: { id: string; localQuantity: number }[] = JSON.parse(localStorage.getItem("cart-items") || "[]");

    localStorage.setItem("cart-items",
      JSON.stringify(cartItems.filter(item => item.id !== id)
    ));
    setCartBikes(cartBikes.filter(item => item.id !== id));
  }

  const addLocalQuantity = () => {
    const localCartItems = JSON.parse(localStorage.getItem("cart-items") || "[]");
    setCartItems([]);

    for (const item of localCartItems) {
      for (let dataItem of cartBikes) {
        if (dataItem.id === item.id) {
          setCartItems(prevItem => {
            return [
              ...prevItem,
              {
                ...dataItem,
                localQuantity: item.localQuantity,
              }
            ];
          });

          break;
        }
      }
    }
  }

  const fetchingCartItems = async () => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items") || "[]");

    const ids: string[] = [];

    for (const item of cartItems) {
      ids.push(item.id);
    }

    setLoading(true);

    try {
      await getCartBikeItems(ids);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

  }

  const getAllItemsPrice = () => {
    let price = 0;

    for (const item of cartItems) {
      price = price + (item.localQuantity ?? 0) * item.price;
    }

    setAllItemsPrice(price);
  }

  useEffect(() => {
    fetchingCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartBikes,
        getCartBikeItems,
        fetchingCartItems,
        deleteCartItem,
        addLocalQuantity,
        cartItems,
        getAllItemsPrice,
        allItemsPrice,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;