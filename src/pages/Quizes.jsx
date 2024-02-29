import { Alert } from 'components/Alert/Alert';
import { Quiz } from 'components/Quiz/Quiz';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  margin: 10px;
  color: black;

  &.active {
    color: orange;
  }
`;
const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

export const Quizes = () => {
  return (
    <div>
      <Alert variant="success" elevated>
        Make and do Quizes
      </Alert>
      <MenuList>
        <li>
          <StyledLink to="/quizes/create">Create Quiz</StyledLink>
        </li>
        <li>
          <StyledLink to="/quizes">Quizes</StyledLink>
        </li>
      </MenuList>
      <Outlet />
    </div>
  );
};
