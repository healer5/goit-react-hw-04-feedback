import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKey = Object.keys(options);

  return (
    <>
      <FeedbackList>
        {optionsKey.map((option, index) => {
          const label = option.charAt(0).toUpperCase() + option.slice(1);

          return (
            <FeedbackItem key={index}>
              <FeedbackButton
                type="button"
                name={option}
                onClick={() => onLeaveFeedback(option)}
              >
                {label}
              </FeedbackButton>
            </FeedbackItem>
          );
        })}
      </FeedbackList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
