import styled from "styled-components";

export const SelectionWrapper = styled.div`
  background: ${({ theme }) => theme.gradient};
  padding: 40px 0;
  & h1 {
    font-size: 60px;
    color: ${({ theme}) => theme.palette.white};
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    & h1 {
      font-size: 38px;
    }
  }
`

export const SelectionBikeImgBox = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.bigScreen}px) {
    display: none;
  }
`

export const SelectionBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.bigScreen}px) {
    justify-content: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: block;
  }
`

export const SelectionForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  & h3 {
    color: ${({ theme }) => theme.palette.white};
  }
`

export const BikeTypesBox = styled.div`
  display: flex;
  gap: 20px;
  & h3 {
    width: 200px;  
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column;
    align-items: center;
    & h3 {
      text-align: center;
    }
  }
`

export const BikeTypeItems = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  & li {
    display: flex;
    align-items: end;
    gap: 10px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
    display: block;
  }
`

export const BikeItemWrapper = styled.div`
  display: flex;
  gap: 10px;
  & button {
    width: 160px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    justify-content: center;
  }
`

export const WheelTypesBox = styled.div`
  display: flex;
  gap: 20px;
  & h3 {
    width: 160px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column;
    align-items: center;
    & h3 {
      text-align: center;
      display: block;
      width: 200px;
    }
  }
`

export const WheelTypeItems = styled.ul`
  display: flex;
  gap: 20px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
  }
`

export const WheelItemWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    justify-content: center;
  }
`

export const UserHeightBox = styled.div`
  & p {
    color: ${({theme}) => theme.palette.white};
  }
  & div:first-child {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    & input {
      width: 110px;
      padding: 15px;
      font-size: 18px;
      color: ${({theme}) => theme.palette.brown};
    }
    & div:last-child {
      display: flex;
      align-items: end;
      gap: 10px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
  }
`

export const UserHeightTopBox = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BottomButtonBox = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    & a {
      width: 100%;
    }
    & button {
      width: 100%;
    }
  }
`