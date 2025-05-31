import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [goodFeedback, setgoodFeedback] = useState(0);
  const [neutralFeedback, setneutralFeedback] = useState(0);
  const [badFeedback, setbadFeedback] = useState(0);

  const feedBacks = {
    good: { goodFeedback },
    neutral: { neutralFeedback },
    bad: { badFeedback },
  };

  return (
    <>
      <Description />
      <Feedback />
      <Options />
    </>
  );
}

export default App;
