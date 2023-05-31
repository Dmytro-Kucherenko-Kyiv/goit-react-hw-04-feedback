import PropTypes from 'prop-types';
import { Button, OptionsWrap } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<OptionsWrap>
			{options.map((name, index) =>
				<Button
					key={index}
					type="button"
					onClick={onLeaveFeedback}>
					{name}
				</Button>)}
		</OptionsWrap>
	)
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};