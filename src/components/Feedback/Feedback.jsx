export default function Feedback({ feedback, totalFeedback }) {
  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((feedback.good / totalFeedback) * 100)}%</p>
    </>
  );
}
