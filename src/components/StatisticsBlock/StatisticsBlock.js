import PropTypes from 'prop-types';
import { Bad, Good, List, Neutral, Positive, Total } from './StatisticsBlock.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage }) => {

  return (
    <List>
      <Good>Good: {good}</Good>
      <Neutral>Neutral: {neutral}</Neutral>
      <Bad>Bad: {bad}</Bad>
      <Total>Total: {total}</Total>
      <Positive>Positive feedback: {positivePercentage}%</Positive>
    </List>
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};