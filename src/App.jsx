import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const [defaultFeedbacks, setDefaultFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <>
      <Description />
      <Options feedbackButtons={Object.keys(defaultFeedbacks)} />
      <Feedback feedbacks={Object.entries(defaultFeedbacks)} />
    </>
  );
}

export default App;
