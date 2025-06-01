function Options({ feedbackButtons }) {
  return (
    <>
      {feedbackButtons.map((feedback, index) => (
        <button key={index}>
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
