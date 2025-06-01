function Options({ feedbackButtons, updateFeedback }) {
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
    </>
  );
}

export default Options;
