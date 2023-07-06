import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';

const { Component } = require('react');

class Feedback extends Component {
  constructor() {
    super();

    this.totalCount = 0;
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.totalCount += 1;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    if (this.totalCount === 0) {
      return 0;
    }

    return Math.round((good * 100) / this.totalCount);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const optionssArr = Object.keys(this.state);

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={optionssArr}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.totalCount !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalCount={this.totalCount}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback!'} />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
