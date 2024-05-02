import styled from "styled-components";

export const SearchingBoxModal = styled.div`
  width: 793px;
  position: absolute;
  top: 110px;
  right: -53px;
  z-index: 2;
  ul {
    margin-top: 5px;
    margin-left: -4px;
    display: flex;
    flex-direction: column;
  }
  ul li {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 4px;
    cursor: pointer;
    border-radius: 4px;
  }
  ul li button {
    opacity: 0;
    padding: 2px 5px;
  }
  ul li:hover {
    background-color: whitesmoke;
  }
  ul li:hover button {
    opacity: 1;
  }
  @media screen and (max-width: 835px) {
    width: calc(100% - 40px);
    left: 20px;
    top: 130px;
    position: fixed;
  }
`;

export const SearchingForm = styled.form`
  display: flex;
  gap: 14px;
  & button {
    width: 183px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    & button {
      width: 30%;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    flex-wrap: wrap;
    & button {
      width: 100%;
    }
  }
`;

export const InputBox = styled.div`
  display: flex;
  position: relative;
  width: 70%;
  & input {
    width: 546px;
    padding: 20px 40px 20px 12px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    width: 100%;
  }
`;