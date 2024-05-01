import styled from "styled-components";

export const BenefitsBox = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 30px;
  padding: 50px 0;
  & li {
    width: 50%;
    display: flex;
    gap: 30px;
    & div:last-child {
      width: 315px;
      & p {
        margin-top: 10px;
      }
    }
    & svg {
      width: 52px;
    }
    @media screen and (max-width: 850px) {
      width: 100%;
    }
  }
  & li:nth-child(2n) {
    justify-content: flex-end;
    @media screen and (max-width: 850px) {
      justify-content: flex-start;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.bigScreen}px) {
    padding: 30px 20px;
  }
`;

export const BenefitsImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 10%);
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.bigScreen}px) {
    display: none;
  }
`;
