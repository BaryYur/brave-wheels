import styled from "styled-components";

export const FilterBoxWrapper = styled.div`
  width: 290px;
`

export const FilterBox = styled.div`
  width: 290px;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({ theme }) => theme.palette.brown};
`

export const FilterBoxMenuWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    position: fixed;
    top: 0;
    height: 100vh;
    z-index: 3;
    overflow-y: auto;
    background-color: white;
    padding: 20px;
  }
`

export const FiltersMenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  & div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100dvh;
    background: rgba(180, 174, 170, 0.31);
    backdrop-filter: blur(4px);
  }
`

export const PriceInputBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  & div:nth-child(2) {
    width: 17px;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.grey};
  }
  & div:first-child,
  & div:last-child {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.palette.grey};
  }
`

export const FiltersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & p:first-child {
    font-weight: 600;
  }
`

export const FilterItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  & label {
    font-family: Open Sans;
    cursor: pointer;
  }
`

export const FilterButton = styled.button`
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  width: 370px;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  & p {
    color: ${({ theme }) => theme.palette.brown};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    display: flex;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 246px;
  }
`

export const FiltersButton = styled.button`
  background-color: ${({ theme }) => theme.palette.orange};
  color: ${({ theme }) => theme.palette.white};
  width: 100%;
  margin-top: -10px;
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 16px 32px;
  border-radius: 10px;
`