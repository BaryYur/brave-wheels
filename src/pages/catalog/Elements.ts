import styled from "styled-components";

export const CatalogWrapper = styled.div`
  padding-top: 120px;
  & h2 {
    text-align: center;
    color: ${({ theme }) => theme.palette.brown};
  }
`;
