import styled from "styled-components";

import Box from "@mui/material/Box";

export const BikeItemsList = styled(Box)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1390px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 527px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
