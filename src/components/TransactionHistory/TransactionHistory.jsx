import PropTypes from 'prop-types';
import { TableHeadCell, TableBodyCell } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TableBodyCell>{type}</TableBodyCell>
              <TableBodyCell>{amount}</TableBodyCell>
              <TableBodyCell>{currency}</TableBodyCell>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
