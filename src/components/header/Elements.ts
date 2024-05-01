import { Link } from "react-router-dom";

import styled from "styled-components";

export const Header = styled.header`
  padding: 34px 0;
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.palette.white};
  @media (max-width: ${({ theme }) => theme.breakpoints.bigScreen}px) {
    padding: 34px 20px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 1276px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 52px;
  @media (max-width: ${({ theme }) => theme.breakpoints.bigScreen}px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 220px;
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    width: 138px;
  }
`;

export const RightNav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 80px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    column-gap: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

export const SupportButton = styled.button`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.palette.brown};
  &:hover {
    color: ${({ theme }) => theme.palette.orange};
  }
  &:hover::after {
    content: "";
    position: absolute;
    bottom: -10px;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.orange};
  }
`;

export const HeaderBtns = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    & a svg {
      width: 44px;
    }
    & button svg {
      width: 44px;
    }
  }
`;

export const SearchButton = styled.button`
  &:hover path {
    fill: ${({ theme }) => theme.palette.orange};
  }
  &:hover rect {
    fill: ${({ theme }) => theme.palette.orange};
  }
  &:hover::after {
    content: "";
    position: absolute;
    bottom: 5px;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.orange};
  }
`;

export const MenuBtn = styled.button`
  & svg {
    width: 52px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    & svg {
      width: 44px;
    }
  }
`;

export const SupportItemModalWrapper = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  width: 100%;
  z-index: 1;
  height: calc(100vh - 120px);
  background: rgba(180, 174, 170, 0.31);
  backdrop-filter: blur(4px);
`;

export const Underline = styled.button`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.orange};
`;

export const CartLink = styled(Link)`
  &:hover svg rect {
    fill: ${({ theme }) => theme.palette.orange};
  }
  &:hover svg path {
    fill: ${({ theme }) => theme.palette.orange};
  }
`;
