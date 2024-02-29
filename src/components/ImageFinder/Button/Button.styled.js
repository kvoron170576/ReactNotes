import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  padding: 10px 20px;
  border-radius: 3px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;

  color: #fff;
  background-color: blue;
  //box-shadow: ${({ theme }) => theme.shadow};

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
