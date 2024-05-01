import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  border-radius: 3px;
  & label {
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    left: 4px;
    top: 4px;
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
  z-index: 1;
  cursor: pointer;
  &:checked ~ label {
    background-color: ${({ theme }) => theme.palette.orange};
  }
`;
