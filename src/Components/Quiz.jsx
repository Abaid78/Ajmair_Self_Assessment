import PropTypes from "prop-types";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
function Quiz({ quiz }) {
  const { question, options, explanation, answer } = quiz;
  const [showExplanation, setShowExplanation] = useState(false);

  function onClickHandler(e) {
    const selectedOption = e.target.innerText;

    if (selectedOption === answer) {
      console.log("Answer is correct");
      setShowExplanation(true); // Show explanation when answer is correct
      e.target.className = "correct_class";
    } else {
      console.log("Answer is wrong");
    }
  }

  return (
    <div>
      <h1>{`${quiz.id} ${question}`}</h1>
      <ol type="A" onClick={(e) => onClickHandler(e)}>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>

      <CSSTransition
        in={showExplanation}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="explanation">
          <p>{explanation.en}</p>
          {explanation.ur && <p>{explanation.ur}</p>}
          {/* Render Urdu explanation if available */}
        </div>
      </CSSTransition>
    </div>
  );
}

Quiz.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    explanation: PropTypes.shape({
      en: PropTypes.string.isRequired,
      ur: PropTypes.string, // Optional Urdu explanation
    }).isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Quiz;
