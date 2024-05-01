import { Link } from "react-router-dom";

import styled from "styled-components";

export const BikeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  min-height: 362px;
`;

export const BikeCardTop = styled(Link)`
  & img {
    display: block;
    width: 219px;
    //width: 100%;
    height: 219px;
    margin: 0 auto;
    object-fit: cover;
  }
  & p {
    margin-top: 10px;
    color: ${({ theme }) => theme.palette.brown};
  }
`;

export const BikeCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-top: 20px;
  & p {
    color: ${({ theme }) => theme.palette.orange};
    font-weight: 600;
  }
`;
