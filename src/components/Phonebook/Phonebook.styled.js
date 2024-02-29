import { styled } from 'styled-components';
export const Wrapper = styled.div`
  text-align: left;
  padding: 20px;
  border: 1px solid #999;
  border-radius: 5px;
  margin: auto;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 10px;
  }
  & ul {
    padding-left: 20px;
  }
  & ul li {
    margin-top: 5px;
  }
  & form {
    padding: 20px;
    border: 1px solid #999;
    border-radius: 5px;
    margin: 15px 0;
  }
  label,
  input {
    display: block;
    margin-bottom: 5px;
  }
`;
