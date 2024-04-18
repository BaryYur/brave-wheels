import { useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import CartContext from "../../context/cart-context";

import { BreadcrumbsList, Container, ViewedBikesSlider } from "../../components";
import { CartItem } from "./CartItem";
import { H1, H3, H4, P, DefaultLink, Button } from "../../theme";

import * as Elements from "./Elements";

export const CartPage = () => {
  const breadcrumbs = [
    <DefaultLink key="1" to="/home">
      Головна
    </DefaultLink>,
    <DefaultLink key="2" to="/cart">
      Кошик
    </DefaultLink>,
  ];

  const {
    cartBikes,
    addLocalQuantity,
    cartItems,
    getAllItemsPrice,
    allItemsPrice,
    fetchingCartItems,
    loading,
  } = useContext(CartContext);
  const formattedAllItemsPrice = new Intl.NumberFormat("ua", {
    style: "currency",
    currency: "UAH",
  }).format(allItemsPrice);

  useEffect(() => {
    fetchingCartItems();
  }, []);

  useEffect(() => {
    if (cartBikes) {
      addLocalQuantity();
    }
  }, [cartBikes]);

  useEffect(() => {
    if (cartItems.length !== 0) {
      getAllItemsPrice();
    }
  }, [cartItems]);

  return (
    <div>
      <Container>
        <Elements.CartWrapper>
          <BreadcrumbsList breadcrumbs={breadcrumbs} />

          <H1>Кошик</H1>
        </Elements.CartWrapper>
      </Container>

      <Elements.CartItemsWrapper>
        {!loading ? (
          <ul>
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                localQuantity={item.localQuantity ?? 1}
                image={item.images[0]}
              />
            ))}
          </ul>
          ) : (
          <P style={{ textAlign: "center", marginTop: "50px" }}>{loading && <span>Завантаження...</span>}</P>
        )}
        {cartItems.length === 0 && !loading && (
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "20px", alignItems: "center", padding: "80px 0" }}>
            <svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M46.274 153.92C42.0393 153.92 38.4142 152.414 35.3986 149.401C32.383 146.388 30.8752 142.767 30.8752 138.536C30.8752 134.305 32.383 130.683 35.3986 127.67C38.4142 124.658 42.0393 123.151 46.274 123.151C50.5087 123.151 54.1338 124.658 57.1494 127.67C60.1651 130.683 61.6729 134.305 61.6729 138.536C61.6729 142.767 60.1651 146.388 57.1494 149.401C54.1338 152.414 50.5087 153.92 46.274 153.92ZM123.268 153.92C119.034 153.92 115.408 152.414 112.393 149.401C109.377 146.388 107.869 142.767 107.869 138.536C107.869 134.305 109.377 130.683 112.393 127.67C115.408 124.658 119.034 123.151 123.268 123.151C127.503 123.151 131.128 124.658 134.144 127.67C137.159 130.683 138.667 134.305 138.667 138.536C138.667 142.767 137.159 146.388 134.144 149.401C131.128 152.414 127.503 153.92 123.268 153.92ZM39.7295 30.8435L58.2081 69.305H112.104L133.277 30.8435H39.7295ZM32.4151 15.4589H145.982C148.933 15.4589 151.179 16.773 152.719 19.4012C154.258 22.0294 154.323 24.6896 152.911 27.3819L125.578 76.6127C124.167 79.1768 122.274 81.164 119.9 82.5742C117.526 83.9845 114.927 84.6896 112.104 84.6896H54.7434L46.274 100.074H138.667V115.459H46.274C40.4994 115.459 36.1364 112.927 33.185 107.863C30.2336 102.799 30.1052 97.7666 32.8 92.7666L43.1942 73.9204L15.4763 15.4589H0.0774819V0.0742348H25.1006L32.4151 15.4589Z"
                fill="#453E38"/>
            </svg>
            <H3>Ваш кошик порожній.</H3>
            <P>Почніть додавати товари, які сподобалися у кошик</P>
            <Link to="/home">
              <Button style={{ marginTop: "60px" }}>На головну</Button>
            </Link>
          </div>
        )}
      </Elements.CartItemsWrapper>

      {cartItems.length !== 0 && !loading && <Container>
        <Elements.PayBox>
          <H4>Разом: <span>{formattedAllItemsPrice}</span></H4>
          {/*<Link to="/">*/}
          <Button>Оформити замовлення</Button>
          {/*</Link>*/}
        </Elements.PayBox>
      </Container>
      }

      <ViewedBikesSlider/>
    </div>
  );
}