import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100dvh;
  z-index: 1;
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100dvh;
  background: rgba(180, 174, 170, 0.31);
  backdrop-filter: blur(4px);
`;

export const MenuBar = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  width: 407px;
  padding: 20px;
  position: absolute;
  height: 100dvh;
  z-index: 2;
  top: 0;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
  @media screen and (max-width: 407px) {
    width: 100%;
  }
`;

export const MenuBarHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & img {
    width: 219px;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.palette.grey};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey};
  margin: 40px 0;
`;

export const NavigationItem = styled.li`
  & a {
    display: flex;
    align-items: center;
    gap: 13px;
    color: ${({ theme }) => theme.palette.brown};
  }
`;
