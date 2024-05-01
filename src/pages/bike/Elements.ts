import styled from "styled-components";

export const MainBikeInfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 100px;
  padding-top: 30px;
  & img {
    width: 330px;
    height: 330px;
    border: 1px solid ${({ theme }) => theme.palette.grey};
    border-radius: 10px;
  }
  & p {
    color: ${({ theme }) => theme.palette.orange};
    font-weight: 600;
    font-size: 20px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    gap: 20px;
    & img {
      width: 360px;
      height: 360px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column;
    & img {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    & img {
      width: 100%;
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & div:last-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;

export const ColorButton = styled.button`
  width: 64px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  border-radius: 5px;
  margin-top: 10px;
`;

export const BenefitsContainer = styled.div`
  margin-top: 60px;
  padding: 94px 20px;
  background-color: ${({ theme }) => theme.palette.lightGrey};
  & ul {
    width: 1276px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    & li {
      display: flex;
      gap: 30px;
      width: 400px;

      & p {
        margin-top: 10px;
      }
    }
  }

  @media screen and (max-width: 1323px) {
    ul {
      width: 100%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 60px 20px;
    ul {
      flex-direction: column;
      gap: 30px;
    }

    ul li {
      width: 100%;
    }
  }
`;

export const DescriptionBox = styled.div`
  padding: 60px 0;
`;

export const SpecificationsBox = styled.div`
  padding-bottom: 60px;
  & ul {
    padding-top: 30px;
  }
  & ul li {
    display: flex;
    gap: 20px;

    & div {
      border-top: 1px solid ${({ theme }) => theme.palette.grey};
    }

    & div:first-child {
      width: 30%;
      padding: 20px 0;
    }

    & div:last-child {
      width: 70%;
      padding: 20px 0;
    }
  }

  & ul li:last-child div {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey};
  }

  @media screen and (max-width: 570px) {
    & ul li {
      & div:first-child {
        width: 50%;
      }

      & div:last-child {
        width: 50%;
      }
    }
  }
`;
