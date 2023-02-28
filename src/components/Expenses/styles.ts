import styled from "styled-components";

const StyledExpenses = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 30px;
`;

const EmptyText = styled.p`
  justify-self: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export { StyledExpenses, EmptyText };
