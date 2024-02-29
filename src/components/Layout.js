import { NavLink, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 15px;
  gap: 20px;
  color: #010101;
`;
const StyledLink = styled(NavLink)`
  margin: 10px;
  color: black;

  &.active {
    color: orange;
  }
`;
export const Layout = () => {
  return (
    <Wrapper>
      <h1>React Notes and Examples</h1>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/quizes">Quizes</StyledLink>
        <StyledLink to="/phonebook">Phone Book</StyledLink>
        <StyledLink to="/images-finder">Images Finder</StyledLink>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
