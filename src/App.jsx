import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const [defaultFeedbacks, setDefaultFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = Object.values(defaultFeedbacks).reduce(
    (acc, number) => acc + number,
    0
  );

  const updateFeedback = (feedbackType) => {
    setDefaultFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setDefaultFeedbacks(
      Object.fromEntries(Object.keys(defaultFeedbacks).map((key) => [key, 0]))
    );
  };

  return (
    <>
      <Description />
      <Options
        feedbackButtons={Object.keys(defaultFeedbacks)}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback feedbacks={Object.entries(defaultFeedbacks)} />
      ) : (
        <Notification text={"No feedback yet"} />
      )}
    </>
  );
}

export default App;
