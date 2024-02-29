import { styled } from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px 0;
`;
export const ListItem = styled.li`
  list-style: none;
  width: calc(100% / 3 - 20px);
`;
