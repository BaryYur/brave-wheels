import styled from "styled-components";

export const NavButton = styled.button`
  //padding: 10px 16px 3px 16px;
  width: 52px;
  height: 52px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.grey};
  &:hover {
    background-color: ${({ theme }) => theme.palette.orange};
  }
  & svg {
    width: 20px;
    height: 32px;
  }
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 44px;
    height: 44px;
    //padding: 7px 15px 3px 15px;
    & svg {
      width: 14px;
      height: 24px;
    }
  }
`;
