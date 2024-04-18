import React, { useEffect, useState, useContext } from "react";

import CartContext from "../../context/cart-context";

import { useScrollToTop } from "../../hooks";

// import { checkInCart } from "../../utils";

import { P, Button, theme } from "../../theme";
import * as Elements from "./Elements";

type BikeCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  inCarousel?: boolean;
  bikeMainPath: string;
  styles?: React.CSSProperties;
}

export const BikeCard: React.FC<BikeCardProps> = ({
  id,
  name,
  price,
  image,
  inCarousel,
  bikeMainPath,
  styles,
}) => {
  const formattedPrice = new Intl.NumberFormat("ua", {
    style: "currency",
    currency: "UAH",
  }).format(price);
  const { scrollToTop } = useScrollToTop();
  const { fetchingCartItems, getCartBikeItems, cartBikes } = useContext(CartContext);
  const [isBikeInCart, setIsBikeInCart] = useState(false);

  const addToCartHandler = (id: string) => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items") ||  "[]");
    const cartIds: string[] = [];

    for (const item of cartItems) {
      cartIds.push(item.id);
    }

    if (!cartIds.includes(id)) {
      cartItems.push({ id, localQuantity: 1 });

      const ids: string[] = [];

      for (const item of cartItems) {
        ids.push(item.id);
      }

      getCartBikeItems(ids);
      localStorage.setItem("cart-items", JSON.stringify(cartItems));
    }

    setIsBikeInCart(true);
    fetchingCartItems();
  }

  const checkIsItemInCart = (id: string) => {
    const ids: string[] = [];

    for (const item of cartBikes) {
      ids.push(item.id);
    }

    return ids.includes(id);
  }

  useEffect(() => {
    if (checkIsItemInCart(id)) {
      setIsBikeInCart(true);
    }
  }, [isBikeInCart, cartBikes]);

  return (
    <Elements.BikeCard
      style={{
        border: inCarousel ? `1px solid ${theme.light.palette.grey}` : "none",
        borderRadius: inCarousel ? "10px" : "none",
        margin: inCarousel ? "0 auto" : "none",
        ...styles,
      }}
    >
      <Elements.BikeCardTop to={`${bikeMainPath}/bike/${id}`} onClick={scrollToTop}>
        <img src={image} alt={name} />
        <P>{name}</P>
      </Elements.BikeCardTop>
      <Elements.BikeCardBottom>
        <div>
          <P>{formattedPrice}</P>
        </div>
        <Button
          style={{
            padding: "8px 8px 4px 8px",
            backgroundColor: isBikeInCart ? "white" : theme.light.palette.orange,
            borderColor: isBikeInCart ? theme.light.palette.orange : theme.light.palette.orange,
          }}
          onClick={() => addToCartHandler(id)}
          disabled={isBikeInCart}
        >
          {isBikeInCart ?
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.628 8.38095V5.2381H7.43961V3.14286H10.628V0H12.7536V3.14286H15.942V5.2381H12.7536V8.38095H10.628ZM6.37681 22C5.79227 22 5.29187 21.7948 4.8756 21.3845C4.45934 20.9742 4.25121 20.481 4.25121 19.9048C4.25121 19.3286 4.45934 18.8353 4.8756 18.425C5.29187 18.0147 5.79227 17.8095 6.37681 17.8095C6.96135 17.8095 7.46175 18.0147 7.87802 18.425C8.29428 18.8353 8.50242 19.3286 8.50242 19.9048C8.50242 20.481 8.29428 20.9742 7.87802 21.3845C7.46175 21.7948 6.96135 22 6.37681 22ZM17.0048 22C16.4203 22 15.9199 21.7948 15.5036 21.3845C15.0874 20.9742 14.8792 20.481 14.8792 19.9048C14.8792 19.3286 15.0874 18.8353 15.5036 18.425C15.9199 18.0147 16.4203 17.8095 17.0048 17.8095C17.5894 17.8095 18.0898 18.0147 18.506 18.425C18.9223 18.8353 19.1304 19.3286 19.1304 19.9048C19.1304 20.481 18.9223 20.9742 18.506 21.3845C18.0898 21.7948 17.5894 22 17.0048 22ZM0 3.14286V1.04762H3.48068L7.99758 10.4762H15.4372L19.5821 3.14286H22L17.3237 11.4714C17.1288 11.8206 16.8676 12.0913 16.5399 12.2833C16.2122 12.4754 15.8535 12.5714 15.4638 12.5714H7.54589L6.37681 14.6667H19.1304V16.7619H6.37681C5.57971 16.7619 4.97303 16.4214 4.55676 15.7405C4.1405 15.0595 4.12721 14.3698 4.51691 13.6714L5.95169 11.1048L2.1256 3.14286H0Z"
                fill="#FF6F1E"/>
            </svg> :
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.60619 22C6.00063 22 5.48223 21.7846 5.051 21.3538C4.61977 20.9229 4.40415 20.405 4.40415 19.8C4.40415 19.195 4.61977 18.6771 5.051 18.2463C5.48223 17.8154 6.00063 17.6 6.60619 17.6C7.21175 17.6 7.73014 17.8154 8.16137 18.2463C8.5926 18.6771 8.80822 19.195 8.80822 19.8C8.80822 20.405 8.5926 20.9229 8.16137 21.3538C7.73014 21.7846 7.21175 22 6.60619 22ZM17.6164 22C17.0108 22 16.4924 21.7846 16.0612 21.3538C15.6299 20.9229 15.4143 20.405 15.4143 19.8C15.4143 19.195 15.6299 18.6771 16.0612 18.2463C16.4924 17.8154 17.0108 17.6 17.6164 17.6C18.2219 17.6 18.7403 17.8154 19.1715 18.2463C19.6028 18.6771 19.8184 19.195 19.8184 19.8C19.8184 20.405 19.6028 20.9229 19.1715 21.3538C18.7403 21.7846 18.2219 22 17.6164 22ZM5.67032 4.4L8.31276 9.9H16.0199L19.0477 4.4H5.67032ZM4.62436 2.2H20.8644C21.2864 2.2 21.6075 2.38792 21.8277 2.76375C22.048 3.13959 22.0571 3.52 21.8553 3.905L17.9467 10.945C17.7448 11.3117 17.4741 11.5958 17.1347 11.7975C16.7952 11.9992 16.4236 12.1 16.0199 12.1H7.81731L6.60619 14.3H19.8184V16.5H6.60619C5.78042 16.5 5.15651 16.1379 4.73446 15.4138C4.3124 14.6896 4.29405 13.97 4.67941 13.255L6.16578 10.56L2.20212 2.2H8.26034e-05V2.29478e-06H3.57839L4.62436 2.2Z"
                fill="white"
              />
            </svg>
          }
        </Button>
      </Elements.BikeCardBottom>
    </Elements.BikeCard>
  );
}