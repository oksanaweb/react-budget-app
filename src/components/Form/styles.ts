import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  gap: 30px;
`;

const StyledInputForm = styled.input`
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

const StyledInputGroup = styled.div`
  display: grid;
  gap: 20px;
`;

const StyledError = styled.span`
  font-size: 12px;
  color: #ff0000;
`;

export { StyledForm, StyledInputGroup, StyledInputForm, StyledError };
