import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [defaultFeedbacks, setDefaultFeedbacks] = useState(
    () => JSON.parse(localStorage.getItem("feedbacks")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(defaultFeedbacks));
  }, [defaultFeedbacks]);

  const totalFeedback = Object.values(defaultFeedbacks).reduce(
    (acc, number) => acc + number,
    0
  );

  const positiveFeedback = Math.round(
    (defaultFeedbacks.good / totalFeedback) * 100
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
        <Feedback
          feedbacks={Object.entries(defaultFeedbacks)}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification text={"No feedback yet"} />
      )}
    </>
  );
}

export default App;
