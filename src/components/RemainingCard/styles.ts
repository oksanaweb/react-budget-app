import styled from "styled-components";

const StyledRemainingCard = styled.div<{ $isOverspending: boolean }>`
  display: grid;
  place-items: center;
  padding: 0 20px;
  border-radius: 10px;
  height: 100px;
  border-radius: 10px;
  background-color: ${({ $isOverspending }) =>
    $isOverspending ? "#FF0000" : "#ccd5ff"};
  color: ${({ $isOverspending }) => ($isOverspending ? "#FFFFFF" : "#000000")};
`;

const StyledRemainingText = styled.p`
  font-size: 20px;
  font-weight: 500;
  justify-self: start;
`;

export { StyledRemainingCard, StyledRemainingText };
