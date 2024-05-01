import React, { useState, useEffect, useContext } from "react";

import { useScrollToTop } from "../../hooks";

import { Link } from "react-router-dom";

import { useBreakpoint } from "../../hooks";

import CartContext from "../../context/cart-context";

import { breakpoints, theme } from "../../theme";

import { HeaderMenu } from "./header-menu/HeaderMenu";
import { SupportItem } from "./support-item/SupportItem";
import { SupportItemModal } from "./support-item/SupportItemModal";
import { SearchingForm } from "./searching-box/SearchingForm";
import { RegularLink } from "../../theme";
import Badge from "@mui/material/Badge";

import * as Elements from "./Elements";
import { logo } from "../../assets";

import { NAVIGATION_ITEMS } from "./data";

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
    >
      <mask
        id="mask0_32_11610"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="44"
        height="44"
      >
        <rect width="44" height="44" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_32_11610)">
        <path
          d="M8 34V30.5H36V34H8ZM8 23.5V20H36V23.5H8ZM8 13.5V10H36V13.5H8Z"
          fill="#453E38"
        />
      </g>
    </svg>
  );
};

const SearchIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_14_9283"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="52"
        height="52"
      >
        <rect width="52" height="52" fill={color} />
      </mask>
      <g mask="url(#mask0_14_9283)">
        <path
          d="M37.8222 40C36.4222 40 28.0222 30.2 28.0222 30.2C27.2444 30.8222 26.35 31.3148 25.3389 31.6778C24.3278 32.0407 23.2519 32.2222 22.1111 32.2222C19.2852 32.2222 16.8935 31.2435 14.9361 29.2861C12.9787 27.3287 12 24.937 12 22.1111C12 19.2852 12.9787 16.8935 14.9361 14.9361C16.8935 12.9787 19.2852 12 22.1111 12C24.937 12 27.3287 12.9787 29.2861 14.9361C31.2435 16.8935 32.2222 19.2852 32.2222 22.1111C32.2222 23.2519 32.0407 24.3278 31.6778 25.3389C31.3148 26.35 30.8222 27.2444 30.2 28.0222C30.2 28.0222 40 36.1111 40 37.6667C40 39.2222 39.2222 40 37.8222 40ZM22.1111 29.1111C24.0556 29.1111 25.7083 28.4306 27.0694 27.0694C28.4306 25.7083 29.1111 24.0556 29.1111 22.1111C29.1111 20.1667 28.4306 18.5139 27.0694 17.1528C25.7083 15.7917 24.0556 15.1111 22.1111 15.1111C20.1667 15.1111 18.5139 15.7917 17.1528 17.1528C15.7917 18.5139 15.1111 20.1667 15.1111 22.1111C15.1111 24.0556 15.7917 25.7083 17.1528 27.0694C18.5139 28.4306 20.1667 29.1111 22.1111 29.1111Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

const CartIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_32_9184"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="52"
        height="52"
      >
        <rect width="52" height="52" fill={color} />
      </mask>
      <g mask="url(#mask0_32_9184)">
        <path
          d="M20.4078 40C19.6371 40 18.9773 39.7258 18.4284 39.1775C17.8796 38.6292 17.6052 37.97 17.6052 37.2C17.6052 36.43 17.8796 35.7708 18.4284 35.2225C18.9773 34.6742 19.6371 34.4 20.4078 34.4C21.1785 34.4 21.8383 34.6742 22.3871 35.2225C22.9359 35.7708 23.2104 36.43 23.2104 37.2C23.2104 37.97 22.9359 38.6292 22.3871 39.1775C21.8383 39.7258 21.1785 40 20.4078 40ZM34.4207 40C33.65 40 32.9902 39.7258 32.4414 39.1775C31.8925 38.6292 31.6181 37.97 31.6181 37.2C31.6181 36.43 31.8925 35.7708 32.4414 35.2225C32.9902 34.6742 33.65 34.4 34.4207 34.4C35.1914 34.4 35.8512 34.6742 36.4 35.2225C36.9489 35.7708 37.2233 36.43 37.2233 37.2C37.2233 37.97 36.9489 38.6292 36.4 39.1775C35.8512 39.7258 35.1914 40 34.4207 40ZM19.2167 17.6L22.5798 24.6H32.3888L36.2424 17.6H19.2167ZM17.8854 14.8H38.5545C39.0917 14.8 39.5004 15.0392 39.7807 15.5175C40.0609 15.9958 40.0726 16.48 39.8157 16.97L34.8411 25.93C34.5842 26.3967 34.2397 26.7583 33.8076 27.015C33.3756 27.2717 32.9026 27.4 32.3888 27.4H21.9492L20.4078 30.2H37.2233V33H20.4078C19.3568 33 18.5627 32.5392 18.0256 31.6175C17.4884 30.6958 17.465 29.78 17.9555 28.87L19.8472 25.44L14.8026 14.8H12V12H16.5542L17.8854 14.8Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export const Header = () => {
  const breakpoint = useBreakpoint();
  const { scrollToTop } = useScrollToTop();
  const { cartBikes, fetchingCartItems } = useContext(CartContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [supportIsOpen, setSupportIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(0);

  const closeMenuHandler = () => setMenuIsOpen(false);
  const openSupportHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setSupportIsOpen(true);
    setSearchIsOpen(false);
  };

  const openSearchHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setSearchIsOpen(true);
    setSupportIsOpen(false);
  };

  useEffect(() => {
    const scrollFunction = () => {
      const header = document.getElementById("header");

      if (window.scrollY > 20 && header) {
        header.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.2)";
      } else if (window.scrollY < 20 && header) {
        header.style.boxShadow = "none";
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  useEffect(() => {
    setItemsInCart(cartBikes.length);
  }, [cartBikes, fetchingCartItems]);

  return (
    <>
      <Elements.Header
        id="header"
        onClick={() => {
          setSupportIsOpen(false);
          setSearchIsOpen(false);
        }}
      >
        <Elements.HeaderWrapper>
          {breakpoint < breakpoints.tablet && (
            <Elements.MenuBtn onClick={() => setMenuIsOpen(true)}>
              <MenuIcon />
            </Elements.MenuBtn>
          )}
          <Link to="/home">
            <Elements.Logo src={logo} alt="logo" onClick={scrollToTop} />
          </Link>

          <Elements.RightNav>
            {breakpoint > breakpoints.phone ? (
              <Elements.Nav>
                <Elements.NavList>
                  {NAVIGATION_ITEMS.map(item => (
                    <RegularLink
                      to={item.path}
                      key={Math.random()}
                      onClick={scrollToTop}
                    >
                      <li>{item.title}</li>
                    </RegularLink>
                  ))}
                </Elements.NavList>

                <div style={{ position: "relative" }}>
                  <Elements.SupportButton
                    onClick={openSupportHandler}
                    style={{
                      color: supportIsOpen
                        ? theme.light.palette.orange
                        : undefined,
                    }}
                  >
                    Підтримка
                  </Elements.SupportButton>
                  {supportIsOpen && <Elements.Underline />}
                  {!searchIsOpen && (
                    <SupportItemModal isOpen={supportIsOpen}>
                      <SupportItem />
                    </SupportItemModal>
                  )}
                </div>
              </Elements.Nav>
            ) : (
              <HeaderMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={closeMenuHandler}
              />
            )}

            <Elements.HeaderBtns>
              <div style={{ position: "relative" }}>
                <Elements.SearchButton onClick={openSearchHandler}>
                  <SearchIcon
                    color={
                      searchIsOpen
                        ? theme.light.palette.orange
                        : theme.light.palette.brown
                    }
                  />
                </Elements.SearchButton>

                {searchIsOpen && (
                  <Elements.Underline style={{ bottom: "5px" }} />
                )}
                {searchIsOpen && (
                  <SearchingForm setSearchIsOpen={setSearchIsOpen} />
                )}
              </div>
              <Badge
                badgeContent={itemsInCart}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: theme.light.palette.orange,
                    color: theme.light.palette.white,
                    top: "10px",
                    right: "10px",
                    zIndex: 0,
                  },
                }}
                max={99}
              >
                <Elements.CartLink to="/cart" onClick={scrollToTop}>
                  <CartIcon color={theme.light.palette.brown} />
                </Elements.CartLink>
              </Badge>
            </Elements.HeaderBtns>
          </Elements.RightNav>
        </Elements.HeaderWrapper>

        {(supportIsOpen || searchIsOpen) && (
          <Elements.SupportItemModalWrapper
            onClick={() => setSupportIsOpen(false)}
          />
        )}
      </Elements.Header>
    </>
  );
};
