import React from "react";

import { useScrollToTop } from "../../hooks";

import { P, Button, theme } from "../../theme";
import * as Elements from "./Elements";

type BikeCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  inCarousel?: boolean;
  bikeMainPath: string;
}

export const BikeCard: React.FC<BikeCardProps> = ({
  id,
  name,
  price,
  image,
  inCarousel,
  bikeMainPath,
}) => {
  const formattedPrice = new Intl.NumberFormat("ua", {
    style: "currency",
    currency: "UAH",
  }).format(price);
  const { scrollToTop } = useScrollToTop();

  return (
    <Elements.BikeCard
      style={{
        border: inCarousel ? `1px solid ${theme.light.palette.grey}` : "none",
        borderRadius: inCarousel ? "10px" : "none",
        margin: inCarousel ? "0 auto" : "none",
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
          style={{ padding: "8px 8px 4px 8px" }}
          onClick={() => console.log(id)}
        >
          {
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