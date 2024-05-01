import styled from "styled-components";

export const Container = styled.div`
  width: 1276px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.bigScreen}px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
