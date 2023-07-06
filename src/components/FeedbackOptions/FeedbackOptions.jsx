import PropTypes from 'prop-types';

import { ButtonsList, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonsList>
      {options.map(el => (
        <li key={el}>
          <Button option={el} onClick={() => onLeaveFeedback(el)} type="button">
            {el}
          </Button>
        </li>
      ))}
    </ButtonsList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
