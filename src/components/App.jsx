import React from "react";
import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { Statistics } from "./StatisticsBlock/StatisticsBlock";

export class App extends Component {
  constructor(props) {
    super(props)

  this.state = {
    good: 0,
    neutral: 0,
    bad: 0
    }  
  };
  
  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.textContent]: prevState[e.target.textContent] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, item) => (total += item), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback === 0 ? 0 : Number(
      ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
    )
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          backgroundColor: '#c3f5bf'
        }}
      >
        <div>
          <Section title="Please leave feedback">

          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback} />
          </Section>

          <Section title="Statistics" >
            {this.countTotalFeedback() !== 0 ? 
            
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              /> :
            <Notification message="There is no feedback"/> }
          </Section>
        </div>
      </div>
    );
  };
};