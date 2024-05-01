import styled from "styled-components";

export const CartWrapper = styled.div`
  padding-top: 140px;
  & h1 {
    font-size: 60px;
    text-align: center;
    color: ${({ theme }) => theme.palette.brown};
  }
`;

export const CartItemsWrapper = styled.div`
  padding-top: 30px;
  & ul li:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey};
  }
  & ul li {
    border-top: 1px solid ${({ theme }) => theme.palette.grey};
    padding: 30px 0;
  }
`;

export const CartItemWrapper = styled.div`
  width: 1276px;
  margin: 0 auto;
  display: flex;
  gap: 100px;
  @media screen and (max-width: 1300px) {
    width: 100%;
    padding: 0 20px;
    gap: 10px;
  }
`;

export const ItemImage = styled.div`
  & img {
    width: 196px;
    height: 196px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.palette.grey};
  }
`;

export const CartItemTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  & h4 {
    display: block;
    width: 400px;
  }
  & h4 a {
    color: ${({ theme }) => theme.palette.brown};
  }
  & h4:hover a {
    opacity: 0.9;
  }
`;

export const NameAndQuantityBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.bigScreen}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ItemInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h4:last-child {
    color: ${({ theme }) => theme.palette.orange};
  }
`;

export const QuantityBox = styled.div`
  display: flex;
  & div {
    padding: 14px 40px;
    border-top: 1px solid ${({ theme }) => theme.palette.grey};
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey};
    font-weight: bold;
  }
  & button {
    padding: 14px 16px;
    border: 1px solid ${({ theme }) => theme.palette.grey};
  }
  & button:hover {
    background-color: whitesmoke;
  }
  & button:first-child {
    border-radius: 5px 0 0 5px;
  }
  & button:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

export const PayBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding-top: 30px;
  & h4 {
    display: flex;
    gap: 70px;
  }
  & h4 span {
    color: ${({ theme }) => theme.palette.orange};
  }
`;

export const DeleteCartItemButton = styled.div`
  padding: 10px 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: whitesmoke;
  }
`;

export const LoaderBox = styled.div``;

export const NoItemsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 80px 20px;
  p {
    text-align: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 40px 20px;
    svg {
      width: 100px;
    }
  }
`;
