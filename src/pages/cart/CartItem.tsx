import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import CartContext from "../../context/cart-context";

import { P, H4 } from "../../theme";

import * as Elements from "./Elements";

import { deleteBtnIcon } from "../../assets";

type CartItemProps = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  localQuantity: number;
  image: string;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  quantity,
  price,
  localQuantity,
  image,
}) => {
  const { deleteCartItem, addLocalQuantity } = useContext(CartContext);
  const formattedPrice = new Intl.NumberFormat("ua", {
    style: "currency",
    currency: "UAH",
  }).format(price * localQuantity);
  const [itemQuantity, setItemQuantity] = useState(localQuantity);

  const increaseItemQuantityHandler = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items") || "[]");

    for (const item of cartItems) {
      if (item.id === id && quantity > item.localQuantity) {
        item.localQuantity = item.localQuantity + 1;
        setItemQuantity(quantity => quantity + 1);
      }
    }

    localStorage.setItem("cart-items", JSON.stringify(cartItems));
    addLocalQuantity();
  };

  const decreaseItemQuantityHandler = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items") || "[]");

    for (const item of cartItems) {
      if (item.id === id && item.localQuantity > 1) {
        item.localQuantity = item.localQuantity - 1;
        setItemQuantity(quantity => quantity - 1);
      }
    }

    localStorage.setItem("cart-items", JSON.stringify(cartItems));
    addLocalQuantity();
  };

  return (
    <li key={id}>
      <Elements.CartItemWrapper>
        <Elements.ItemImage>
          <img src={image} alt="bike" />
        </Elements.ItemImage>
        <Elements.ItemInfoBox>
          <Elements.CartItemTopBox>
            <Elements.NameAndQuantityBox>
              <H4>
                <Link to={`/home/bike/${id}`}>{name}</Link>
              </H4>
              <Elements.QuantityBox>
                <button onClick={decreaseItemQuantityHandler}>
                  <svg
                    viewBox="0 0 24 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 0V4L0 4V0L24 0Z" fill="#453E38" />
                  </svg>
                </button>
                <div>
                  <P>{itemQuantity}</P>
                </div>
                <button onClick={increaseItemQuantityHandler}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 10.5L24 10.5V13.5L13.5 13.5L13.5 24H10.5L10.5 13.5L-3.8147e-06 13.5V10.5L10.5 10.5L10.5 0H13.5L13.5 10.5Z"
                      fill="#453E38"
                    />
                  </svg>
                </button>
              </Elements.QuantityBox>
            </Elements.NameAndQuantityBox>

            <Elements.DeleteCartItemButton onClick={() => deleteCartItem(id)}>
              <img src={deleteBtnIcon} alt="delete" />
            </Elements.DeleteCartItemButton>
          </Elements.CartItemTopBox>
          <H4>{formattedPrice}</H4>
        </Elements.ItemInfoBox>
      </Elements.CartItemWrapper>
    </li>
  );
};
