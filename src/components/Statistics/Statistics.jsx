import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, totalCount, positivePercentage }) {
  return (
    <div>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>

      <p>
        Total: <span>{totalCount}</span>
      </p>
      <p>
        Positive feedback: <span>{`${positivePercentage()}%`}</span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
