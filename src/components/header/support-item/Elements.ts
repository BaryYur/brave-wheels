import styled from "styled-components";

export const SupportItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const SupportItemModal = styled.div`
  width: 407px;
  position: absolute;
  top: 80px;
  right: -56px;
  z-index: 2;
  max-height: calc(100vh - 130px);
  overflow-y: auto;
`;

export const SupportItemInfoItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const SupportItemInfo = styled.li`
  text-align: center;
  color: ${({ theme }) => theme.palette.brown};
`;

export const SupportForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  & h4 {
    color: ${({ theme }) => theme.palette.brown};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 0 20px;
  }
`;
