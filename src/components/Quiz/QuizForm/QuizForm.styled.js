import { styled } from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';
export const StyledForm = styled(Form)`
  text-align: left;
  padding: 20px;
  border: 1px solid #999;
  border-radius: 5px;
  margin: 15px auto;
  label {
    display: block;
    margin-bottom: 5px;
  }
`;
export const StyledField = styled(Field)`
  display: block;
  margin-bottom: 5px;
`;
export const StyledErrMess = styled(ErrorMessage)`
  color: red;
`;
