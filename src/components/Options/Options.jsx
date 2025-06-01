function Options({
  feedbackButtons,
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <>
      {feedbackButtons.map((feedback, index) => (
        <button key={index} onClick={() => updateFeedback(feedback)}>
          {feedback
            .split("")
            .map((char, index) => (index === 0 ? char.toUpperCase() : char))
            .join("")}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button onClick={() => resetFeedback()}>Reset</button>
      )}
    </>
  );
}

export default Options;
