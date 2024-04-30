import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.palette.brown};
  ul li a p {
    color: ${({ theme }) => theme.palette.white};
  }
`

export const LinksList = styled.ul`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const FooterContainer = styled.div`
  width: 1276px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  @media screen and (max-width: 1350px) {
    width: 100%;
    padding: 15px 20px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`

export const ContactBox = styled.div`
  div:last-child {
    margin-top: 50px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    div:last-child {
      margin-top: 0;
    }
    padding-bottom: 25px;
    border-bottom: 1px solid white;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`