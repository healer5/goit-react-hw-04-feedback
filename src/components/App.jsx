import { useState } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = evt => {
    switch (evt) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={handleIncrement} />
      </Section>

      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
};