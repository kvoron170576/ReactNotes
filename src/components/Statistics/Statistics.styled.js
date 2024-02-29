import { styled } from 'styled-components';

const getBgColor = ({ label }) => {
  switch (label) {
    case '.docx':
      return '#4ec5d3';
    case '.pdf':
      return '#c54ed3';
    case '.mp3':
      return '#d34e67';
    case '.psd':
      return '#6fd34e';
    default:
      return 'gray';
  }
};

export const StatisticCard = styled.section`
  border-radius: 3px;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  max-width: 300px;
  min-width: 250px;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;
export const Title = styled.h2`
  padding: 20px;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 18px;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  color: #fff;
  font-size: 12px;
`;
export const StatItem = styled.li`
  padding: 15px;
  background-color: ${getBgColor};
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const Percentage = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
