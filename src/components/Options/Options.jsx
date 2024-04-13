import css from "./Options.module.css"

export default function Options({ onUpdate, totalFeedback, resetFeedback }) {
  return (
    <div className={css.giveFeedbackButtonsList}>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {totalFeedback ? <button onClick={resetFeedback}>Reset</button> : <></>}
    </div>
  );
}
