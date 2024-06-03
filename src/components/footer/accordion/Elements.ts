import styled from "styled-components";

export const AccordionWrapper = styled.div``;

export const AccordionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
`;

export const AccordionInfoBox = styled.div`
  display: grid;
  overflow: hidden;
  transition: all 0.3s;
  ul {
    min-height: 0;
    padding: 3px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
