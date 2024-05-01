import { useEffect, useContext, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import BikeContext from "../../context/bike-context";
import CartContext from "../../context/cart-context";

import {
  Container,
  BreadcrumbsList,
  ViewedBikesSlider,
} from "../../components";
import {
  DefaultLink,
  H3,
  H4,
  P,
  Button,
  OutlineButton,
  theme,
} from "../../theme";

import { checkInCart } from "../../utils";

import * as Elements from "./Elements";

// const dataLocales = {
//   bikeTypes: {
//     mountain: "Гірський"
//   },
// }

const BENEFITS_ITEMS = [
  {
    title: "Відправка в той же день.",
    description: "При замовленні до 17:00 відправимо сьогодні.",
    icon: (
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.2222 29.6225V17.9775L3.55556 12.07V23.715L14.2222 29.6225ZM17.7778 29.6225L28.4444 23.715V12.07L17.7778 17.9775V29.6225ZM14.2222 33.5325L1.77778 26.69C1.21481 26.3783 0.777778 25.9675 0.466667 25.4575C0.155556 24.9475 0 24.3808 0 23.7575V10.2425C0 9.61917 0.155556 9.0525 0.466667 8.5425C0.777778 8.0325 1.21481 7.62167 1.77778 7.31L14.2222 0.4675C14.7852 0.155833 15.3778 0 16 0C16.6222 0 17.2148 0.155833 17.7778 0.4675L30.2222 7.31C30.7852 7.62167 31.2222 8.0325 31.5333 8.5425C31.8444 9.0525 32 9.61917 32 10.2425V23.7575C32 24.3808 31.8444 24.9475 31.5333 25.4575C31.2222 25.9675 30.7852 26.3783 30.2222 26.69L17.7778 33.5325C17.2148 33.8442 16.6222 34 16 34C15.3778 34 14.7852 33.8442 14.2222 33.5325ZM23.1111 11.0925L26.5333 9.2225L16 3.4L12.5333 5.3125L23.1111 11.0925ZM16 15.045L19.4667 13.1325L8.93333 7.31L5.46667 9.2225L16 15.045Z"
          fill="#EA661B"
        />
      </svg>
    ),
  },
  {
    title: "Безкоштовна доставка.",
    description: "Замовлення від 15 000 грн доставляються безкоштовно. ",
    icon: (
      <svg
        width="44"
        height="32"
        viewBox="0 0 44 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 32C8.33333 32 6.91667 31.4167 5.75 30.25C4.58333 29.0833 4 27.6667 4 26H0V4C0 2.9 0.391667 1.95833 1.175 1.175C1.95833 0.391667 2.9 0 4 0H32V8H38L44 16V26H40C40 27.6667 39.4167 29.0833 38.25 30.25C37.0833 31.4167 35.6667 32 34 32C32.3333 32 30.9167 31.4167 29.75 30.25C28.5833 29.0833 28 27.6667 28 26H16C16 27.6667 15.4167 29.0833 14.25 30.25C13.0833 31.4167 11.6667 32 10 32ZM10 28C10.5667 28 11.0417 27.8083 11.425 27.425C11.8083 27.0417 12 26.5667 12 26C12 25.4333 11.8083 24.9583 11.425 24.575C11.0417 24.1917 10.5667 24 10 24C9.43333 24 8.95833 24.1917 8.575 24.575C8.19167 24.9583 8 25.4333 8 26C8 26.5667 8.19167 27.0417 8.575 27.425C8.95833 27.8083 9.43333 28 10 28ZM3.5 22H5.6C6.16667 21.4 6.81667 20.9167 7.55 20.55C8.28333 20.1833 9.1 20 10 20C10.9 20 11.7167 20.1833 12.45 20.55C13.1833 20.9167 13.8333 21.4 14.4 22H29V3H3.5V22ZM34 28C34.5667 28 35.0417 27.8083 35.425 27.425C35.8083 27.0417 36 26.5667 36 26C36 25.4333 35.8083 24.9583 35.425 24.575C35.0417 24.1917 34.5667 24 34 24C33.4333 24 32.9583 24.1917 32.575 24.575C32.1917 24.9583 32 25.4333 32 26C32 26.5667 32.1917 27.0417 32.575 27.425C32.9583 27.8083 33.4333 28 34 28ZM32 21.5H40.5L40 17L36 12H32V21.5Z"
          fill="#EA661B"
        />
      </svg>
    ),
  },
  {
    title: "Служба підтримки 24/7.",
    description: "Наші консультанти завжди раді вам допомогти",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.12 32C23.7867 32 20.4933 31.2733 17.24 29.82C13.9867 28.3667 11.0267 26.3067 8.36 23.64C5.69333 20.9733 3.63333 18.0133 2.18 14.76C0.726667 11.5067 0 8.21333 0 4.88C0 4.4 0.16 4 0.48 3.68C0.8 3.36 1.2 3.2 1.68 3.2H8.16C8.53333 3.2 8.86667 3.32667 9.16 3.58C9.45333 3.83333 9.62667 4.13333 9.68 4.48L10.72 10.08C10.7733 10.5067 10.76 10.8667 10.68 11.16C10.6 11.4533 10.4533 11.7067 10.24 11.92L6.36 15.84C6.89333 16.8267 7.52667 17.78 8.26 18.7C8.99333 19.62 9.8 20.5067 10.68 21.36C11.5067 22.1867 12.3733 22.9533 13.28 23.66C14.1867 24.3667 15.1467 25.0133 16.16 25.6L19.92 21.84C20.16 21.6 20.4733 21.42 20.86 21.3C21.2467 21.18 21.6267 21.1467 22 21.2L27.52 22.32C27.8933 22.4267 28.2 22.62 28.44 22.9C28.68 23.18 28.8 23.4933 28.8 23.84V30.32C28.8 30.8 28.64 31.2 28.32 31.52C28 31.84 27.6 32 27.12 32ZM4.84 12.8L7.48 10.16L6.8 6.4H3.24C3.37333 7.49333 3.56 8.57333 3.8 9.64C4.04 10.7067 4.38667 11.76 4.84 12.8ZM19.16 27.12C20.2 27.5733 21.26 27.9333 22.34 28.2C23.42 28.4667 24.5067 28.64 25.6 28.72V25.2L21.84 24.44L19.16 27.12ZM24 16C21.7867 16 19.9 15.22 18.34 13.66C16.78 12.1 16 10.2133 16 8C16 5.78667 16.78 3.9 18.34 2.34C19.9 0.78 21.7867 0 24 0C26.2133 0 28.1 0.78 29.66 2.34C31.22 3.9 32 5.78667 32 8C32 10.2133 31.22 12.1 29.66 13.66C28.1 15.22 26.2133 16 24 16ZM23.2 12.8H24.8V6.4H23.2V12.8ZM24 4.8C24.2133 4.8 24.4 4.72 24.56 4.56C24.72 4.4 24.8 4.21333 24.8 4C24.8 3.78667 24.72 3.6 24.56 3.44C24.4 3.28 24.2133 3.2 24 3.2C23.7867 3.2 23.6 3.28 23.44 3.44C23.28 3.6 23.2 3.78667 23.2 4C23.2 4.21333 23.28 4.4 23.44 4.56C23.6 4.72 23.7867 4.8 24 4.8Z"
          fill="#EA661B"
        />
      </svg>
    ),
  },
];

export const BikePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { bike, getBike } = useContext(BikeContext);
  const { fetchingCartItems } = useContext(CartContext);
  const [isBikeInCart, setIsBikeInCart] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params.id) {
      setLoading(true);

      getBike(params.id)
        .then(result => {
          if (result === "error") {
            navigate("/home");
          }
        })
        .finally(() => setLoading(false));
    }
  }, [params.id]);

  const breadcrumbs = [
    <DefaultLink key="1" to="/home">
      Головна
    </DefaultLink>,
    <DefaultLink key="2" to="/catalog">
      Каталог
    </DefaultLink>,
    <DefaultLink key="2" to={`/home/bike/${bike?.id}`}>
      {bike?.name}
    </DefaultLink>,
  ];

  const formattedPrice = new Intl.NumberFormat("ua", {
    style: "currency",
    currency: "UAH",
  }).format(bike?.price || 0);

  const checkIsViewedHandler = () => {
    const viewedItemsStore = JSON.parse(
      localStorage.getItem("viewed-items-store") || "[]",
    );

    if (!viewedItemsStore.includes(params.id) && bike !== null) {
      viewedItemsStore.push(params.id);
      localStorage.setItem(
        "viewed-items-store",
        JSON.stringify(viewedItemsStore),
      );
    }
  };

  const addToCartHandler = (id: string) => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items") || "[]");
    const cartIds: string[] = [];

    for (const item of cartItems) {
      cartIds.push(item.id);
    }

    if (!cartIds.includes(id) && bike !== null) {
      cartItems.push({ id, localQuantity: 1 });
      localStorage.setItem("cart-items", JSON.stringify(cartItems));
    }

    setIsBikeInCart(true);
    fetchingCartItems();
  };

  useEffect(() => {
    checkIsViewedHandler();

    if (bike !== null) {
      if (checkInCart(bike.id)) {
        setIsBikeInCart(true);
      } else {
        setIsBikeInCart(false);
      }
    }
  }, [bike, isBikeInCart]);

  if (bike === null || loading)
    return (
      <P style={{ paddingTop: "140px", textAlign: "center" }}>
        Завантаження...
      </P>
    );

  return (
    <div style={{ paddingTop: "130px" }}>
      <Container>
        <BreadcrumbsList breadcrumbs={breadcrumbs} />

        <Elements.MainBikeInfoBox>
          <img src={bike.images[0]} />

          <Elements.InfoBox>
            <H3 style={{ color: theme.light.palette.brown }}>{bike.name}</H3>
            <P>{formattedPrice}</P>
            <div>
              <H4>Колір</H4>
              <Elements.ColorButton
                style={{ backgroundColor: bike.color }}
              ></Elements.ColorButton>
            </div>
            <div>
              <Button
                onClick={() => addToCartHandler(bike.id ?? "")}
                disabled={isBikeInCart}
              >
                Додати в корзину
              </Button>
              <OutlineButton>Купити зараз</OutlineButton>
            </div>
          </Elements.InfoBox>
        </Elements.MainBikeInfoBox>
      </Container>

      <Elements.BenefitsContainer>
        <ul>
          {BENEFITS_ITEMS.map(item => (
            <li key={Math.random()}>
              <div>{item.icon}</div>
              <div>
                <H4>{item.title}</H4>
                <P>{item.description}</P>
              </div>
            </li>
          ))}
        </ul>
      </Elements.BenefitsContainer>

      <Container>
        <Elements.DescriptionBox>
          <H4>Опис</H4>
          <P>{bike.description}</P>
        </Elements.DescriptionBox>

        <Elements.SpecificationsBox>
          <H4>Характеристики</H4>
          <ul>
            <li>
              <div>
                <P>Бренд</P>
              </div>
              <div>
                <P>{bike.brand}</P>
              </div>
            </li>
            <li>
              <div>
                <P>Тип велосипеда</P>
              </div>
              <div>
                <P>{bike.bicycleType}</P>
              </div>
            </li>
            <li>
              <div>
                <P>Діаметр колеса</P>
              </div>
              <div>
                <P>{bike.wheelSize} inch</P>
              </div>
            </li>
            <li>
              <div>
                <P>Вага</P>
              </div>
              <div>
                <P>{bike.weight} кг</P>
              </div>
            </li>
            <li>
              <div>
                <P>Тип рами</P>
              </div>
              <div>
                <P>{bike.frameType}</P>
              </div>
            </li>
            <li>
              <div>
                <P>Тип гальма</P>
              </div>
              <div>
                <P>{bike.brakeType}</P>
              </div>
            </li>
            <li>
              <div>
                <P>Матеріал рами</P>
              </div>
              <div>
                <P>{bike.materialType}</P>
              </div>
            </li>
            <li>
              <div>
                <P>Гарантія</P>
              </div>
              <div>
                <P>{bike.guarantee}</P>
              </div>
            </li>
          </ul>
        </Elements.SpecificationsBox>

        <ViewedBikesSlider />
      </Container>
    </div>
  );
};
