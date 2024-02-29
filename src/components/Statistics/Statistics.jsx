import {
  StatisticCard,
  Title,
  StatList,
  StatItem,
  Percentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticCard>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id} label={stat.label}>
              <span>{stat.label}</span>
              <Percentage>{stat.percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
