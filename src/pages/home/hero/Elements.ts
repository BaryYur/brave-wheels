import styled from "styled-components";

export const HeroWrapper = styled.div`
  padding-top: 120px;
  height: 977px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 820px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    height: 720px;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  & div img {
    position: absolute;
    top: 100px;
    z-index: 0;
    right: -20px;
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.bigScreen}px) {
    & div img {
      width: 640px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    & div img {
      width: 500px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    & div img {
      width: 400px;
      top: 200px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    & div img {
      width: 300px;
      top: 130px;
    }
  }
`;

export const HeroInfo = styled.div`
  width: 580px;
  position: relative;
  z-index: 1;
  padding-top: 100px;
  & h1 {
    color: ${({ theme }) => theme.palette.brown};
  }
  & h3 {
    color: ${({ theme }) => theme.palette.brown};
  }
  & button {
    margin-top: 80px;
    width: 330px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 300px;
    padding-top: 20px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    & button {
      margin-top: 20px;
      width: 300px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    & button {
      width: 200px;
    }
  }
`;

export const OrangeBox = styled.div`
  width: 367px;
  height: 857px;
  background-color: ${({ theme }) => theme.palette.orange};
  position: absolute;
  right: 170px;
  top: 0;
  z-index: 0;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.bigScreen}px) {
    width: 330px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 250px;
    right: 50px;
    height: 700px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    width: 150px;
    right: -20px;
    height: 600px;
  }
`;
