function Feedback({ feedbacks, total, positive }) {
  return (
    <>
      {feedbacks.map((feedback, index) => (
        <p key={index}>{`${feedback[0]
          .split("")
          .map((char, index) => (index === 0 ? char.toUpperCase() : char))
          .join("")}: ${feedback[1]}`}</p>
      ))}
      <p>Total: {total}</p>
      <p>Positive: {positive}</p>
    </>
  );
}

export default Feedback;
