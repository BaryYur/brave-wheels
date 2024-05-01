import { Link } from "react-router-dom";

import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.orange};
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 16px 32px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.palette.orange};
  transition: all 0.2s ease-in-out;
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.palette.grey};
    color: white;
    border: 2px solid ${({ theme }) => theme.palette.grey};
  }
  &:disabled:hover {
    opacity: 1;
  }
  &:hover {
    // background-color: {({ theme }) => theme.palette.white};
    // color: {({ theme }) => theme.palette.orange};
    // box-shadow: 0px 4px 11px 0px rgba(130, 82, 38, 0.52);
    // border: 2px solid transparent;
    opacity: 0.8;
  }
`;

export const DefaultButton = styled.button`
  color: ${({ theme }) => theme.palette.brown};
  background-color: ${({ theme }) => theme.palette.white};
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 16px 32px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.palette.white};
  transition: all 0.2s ease-in-out;
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.palette.grey};
    color: white;
    border: 2px solid ${({ theme }) => theme.palette.grey};
  }
  &:disabled:hover {
    opacity: 1;
  }
  &:hover {
    // background-color: ${({ theme }) => theme.palette.white};
    // color: ${({ theme }) => theme.palette.orange};
    // box-shadow: 0px 4px 11px 0px rgba(130, 82, 38, 0.52);
    // border: 2px solid transparent;
    opacity: 0.8;
  }
`;

export const OutlineButton = styled.button`
  color: ${({ theme }) => theme.palette.orange};
  background-color: ${({ theme }) => theme.palette.white};
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 16px 32px;
  border: 2px solid ${({ theme }) => theme.palette.orange};
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.palette.grey};
    color: white;
    border: 2px solid ${({ theme }) => theme.palette.grey};
  }
  &:disabled:hover {
    opacity: 1;
  }
  &:hover {
    background-color: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.orange};
    box-shadow: 0px 4px 11px 0px rgba(130, 82, 38, 0.52);
    border: 2px solid transparent;
  }
`;

export const RegularLink = styled(Link)`
  position: relative;
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
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

export const DefaultLink = styled(Link)`
  position: relative;
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.brown};
  &:hover {
    color: ${({ theme }) => theme.palette.orange};
  }
`;

export const Modal = styled.div`
  padding: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  background: ${({ theme }) => theme.palette.white};
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    padding: 40px 20px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  background: ${({ theme }) => theme.palette.white};
  transition: all 0.2s ease-in-out;
  font-size: 17px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.orange};
  }
`;

export const H1 = styled.h1`
  font-family: "Oswald";
  font-size: 74px;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.palette.brown};
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: 52px;
  }
`;

export const H2 = styled.h2`
  font-family: "Oswald";
  font-size: 60px;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.palette.brown};
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: 38px;
    line-height: 38px;
  }
`;

export const H3 = styled.h3`
  font-family: "Open Sans";
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.palette.brown};
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: 24px;
  }
`;

export const H4 = styled.h4`
  font-family: "Open Sans";
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.palette.brown};
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 20px;
  }
`;

export const P = styled.p`
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.palette.brown};
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 16px;
  }
`;

export const P2 = styled.p`
  font-family: "Open Sans";
  font-size: 4px;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.palette.brown};
`;
