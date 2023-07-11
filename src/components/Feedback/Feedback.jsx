import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';

const { Component } = require('react');

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
    this.getTotalFeedbackCount();
  };

  getTotalFeedbackCount = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalCount = this.getTotalFeedbackCount();

    if (totalCount === 0) {
      return 0;
    }

    return Math.round((good * 100) / totalCount);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const optionssArr = Object.keys(this.state);
    const totalCount = this.getTotalFeedbackCount();

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={optionssArr}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {totalCount !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalCount={this.getTotalFeedbackCount()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
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
