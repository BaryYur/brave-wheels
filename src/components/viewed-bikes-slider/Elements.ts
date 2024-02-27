import styled from "styled-components";

export const ViewdItemsList = styled.div`
  display: flex;
  gap: 20px;
  margin: 50px 0;
  width: 100%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    overflow-x: auto;
  }
`

export const SiderCardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.grey};
  border-radius: 10px;
`