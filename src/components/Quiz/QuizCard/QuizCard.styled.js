import { styled } from 'styled-components';
const getBorderColor = ({ $_level }) => {
  switch ($_level) {
    case 'beginner':
      return 'green';
    case 'intermediate':
      return 'orange';
    case 'advanced':
      return 'blue';
    default:
      return 'gray';
  }
};

const getBgColor = ({ $_level, theme }) => {
  switch ($_level) {
    case 'beginner':
      return theme.colors.greenBg;
    case 'intermediate':
      return 'orange';
    case 'advanced':
      return theme.colors.blueBg;
    default:
      return 'gray';
  }
};
export const Wrapper = styled.div`
  transition: 0.3s;
  line-height: 1.5;
  width: 100%;
  height: 100%;
  padding: 10px;
  cursor: pointer;
  border: 2px solid ${getBorderColor};
  border-radius: ${({ theme }) => theme.bordR.md};
  &:hover {
    background-color: ${getBgColor};
  }
`;
export const Title = styled.h2`
  margin: 0 0 15px;
`;
export const MetaWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const Text = styled.p`
  letter-spacing: 1px;
  color: ${({ color }) => {
    return color;
  }};
`;
export const Button = styled.button`
  color: red;
  border: 1px solid red;
  border-radius: 3px;
  padding: 4px;
  margin: 0;
  width: 40px;
  height: 40px;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    background-color: #fff;
  }
  & svg {
    width: 100%;
    height: 100%;
  }
`;
