import React from "react";
import { Button } from "react-bootstrap";

const Result = ({
  passed,
  score,
  totalQuestions,
  correctAnswers,
  retakeTest,
}) => {
  return (
    <div className="result">
      <div className={`result-${passed ? "pass" : "fail"}`}>
        <h2>
          RESULT:{" "}
          {passed
            ? "Congratulations you passed the test!"
            : "Sorry, you failed the test"}
        </h2>
        <h3>Percentage: {(score * 100).toFixed()} %</h3>
        <h4>
          From {totalQuestions} questions, you had {correctAnswers} correct
          answers.
        </h4>
      </div>
      {!passed && (
        <Button onClick={retakeTest} variant="primary" size="lg">
          Retake The Test
        </Button>
      )}
    </div>
  );
};

export default Result;
