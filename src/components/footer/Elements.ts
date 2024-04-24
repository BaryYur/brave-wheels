import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.palette.brown};
  ul {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  ul li a p {
    color: ${({ theme }) => theme.palette.white};
  }
`