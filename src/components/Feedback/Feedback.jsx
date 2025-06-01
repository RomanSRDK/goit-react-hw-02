function Feedback({ feedbacks }) {
  return (
    <>
      {feedbacks.map((feedback, index) => (
        <p key={index}>{`${feedback[0]
          .split("")
          .map((char, index) => (index === 0 ? char.toUpperCase() : char))
          .join("")}: ${feedback[1]}`}</p>
      ))}
    </>
  );
}

export default Feedback;
