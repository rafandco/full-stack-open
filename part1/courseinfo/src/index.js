import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({good, neutral, bad}) => {
  // data for statistics
  const clicks = good + neutral + bad;
  const positiveClicks = clicks === 0 ? 0 : (good / clicks) * 100;
  const averageClicks = (good * 1 + neutral * 0 + bad * -1) / clicks;
  if (clicks === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {clicks}</p>
      <p>average {averageClicks}</p>
      <p>positive {positiveClicks} %</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // handle clicks functions
  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClickGood} text={"good"} />
      <Button onClick={handleClickNeutral} text={"neutral"} />
      <Button onClick={handleClickBad} text={"bad"} />
      <h1>statistic</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
