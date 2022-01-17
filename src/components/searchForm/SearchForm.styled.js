import styled from 'styled-components';

export const FormStyled = styled.form`
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  overflow: hidden;

  & .input {
    width: 200px;
    height: 40px;
    border: none;
    padding-left: 20px;
    outline: none;
    background-color: #ffffff;
    transition: background-color 200ms linear;

    &:focus {
      background-color: #eeeeee;
    }
  }
`;
