import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #999999;
  }
`;

export { StyledInput };
