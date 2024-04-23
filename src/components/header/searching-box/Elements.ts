import styled from "styled-components";

export const SearchingBoxModal = styled.div`
  width: 793px;
  position: absolute;
  top: 110px;
  right: -53px;
  z-index: 2;
  ul {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  @media screen and (max-width: 835px) {
    width: calc(100% - 40px);
    left: 20px;
    top: 130px;
    position: fixed;
  }
`

export const SearchingForm = styled.form`
  display: flex;
  gap: 14px;
  & input {
    width: 516px;
  }
  & button {
    width: 183px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    flex-wrap: wrap;
    & input {
      padding: 20px 10px;
      width: 100%;
    }
    & button {
      width: 100%;
    }
  }
`