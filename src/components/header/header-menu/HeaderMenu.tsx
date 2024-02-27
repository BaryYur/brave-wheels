import React from "react";

import { Link } from "react-router-dom";

import { SupportItem } from "../support-item/SupportItem";
import { P } from "../../../theme";

import { logo, actionIcon, cartIcon, catalogIcon, homeIcon } from "../../../assets";

import * as Elements from "./Elements";

type HeaderMenuProps = {
  menuIsOpen: boolean;
  onCloseMenu: () => void;
}

const CrossIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
      <mask id="mask0_334_10209" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="52" height="52">
        <rect width="52" height="52" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_334_10209)">
        <path
          d="M23.4439 25.733L13.7219 14.4748L16.4996 11.2582L26.2217 22.5164L35.9438 11.2582L38.7215 14.4748L28.9994 25.733L38.7215 36.9912L35.9438 40.2078L26.2217 28.9496L16.4996 40.2078L13.7219 36.9912L23.4439 25.733Z"
          fill="#453E38"/>
      </g>
    </svg>
  );
}

const NAVIGATION_ITEMS = [
  {
    path: "/home",
    title: "Головна",
    icon: homeIcon,
  },
  {
    path: "/catalog",
    title: "Каталог",
    icon: catalogIcon,
  },
  {
    path: "/actions",
    title: "Акції",
    icon: actionIcon,
  },
  {
    path: "/cart",
    title: "Кошик",
    icon: cartIcon,
  },
];

export const HeaderMenu: React.FC<HeaderMenuProps> = ({menuIsOpen, onCloseMenu}) => {
  return (
    <>
      <Elements.MenuBar
        style={{
          left: menuIsOpen ? "0" : "-410px",
        }}
      >
        <Elements.MenuBarHead>
          <img src={logo}/>
          <button onClick={onCloseMenu}>
            <CrossIcon />
          </button>
        </Elements.MenuBarHead>

        <Elements.Navigation>
          {NAVIGATION_ITEMS.map(item => (
            <Elements.NavigationItem key={Math.random()} onClick={onCloseMenu}>
              <Link to={item.path}>
                <img src={item.icon} />
                <P>{item.title}</P>
              </Link>
            </Elements.NavigationItem>
          ))}
        </Elements.Navigation>

        <SupportItem />
      </Elements.MenuBar>

      {menuIsOpen && (
        <Elements.MenuWrapper>
          <Elements.Wrapper onClick={onCloseMenu}/>
        </Elements.MenuWrapper>
      )}
    </>
  );
}