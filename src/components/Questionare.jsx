import React from "react";
import { questions } from "../utils";
import Header from "./Header";
import { Button } from "react-bootstrap";

const Questionare = ({
  currentQuestionIndex,
  answers = [],
  isButtonDisabled,
  calculateScore,
  handleNext,
  handleAnswer,
  isMultipleCorrectOptionsType,
  activeAnswers = {},
}) => {
  const currentQuestion = questions[currentQuestionIndex].question;
  const totalQuestions = questions.length;
  const isLastQuestion = answers.length === totalQuestions;

  return (
    <>
      <Header
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        currentQuestion={currentQuestion}
      />

      <div className="d-grid gap-3">
        {questions[currentQuestionIndex].options.map((option, index) => {
          const activeAnswer =
            activeAnswers[questions[currentQuestionIndex].id];
          return (
            <Button
              active={
                isMultipleCorrectOptionsType
                  ? activeAnswer?.includes(option)
                  : activeAnswer === option
              }
              id={questions[currentQuestionIndex].id}
              key={index}
              value={option}
              onClick={() => {
                handleAnswer(option);
              }}
              variant="outline-info"
              size="lg"
            >
              {option}
            </Button>
          );
        })}
      </div>
      <div className="d-grid gap-2 buttons">
        {isLastQuestion ? (
          <Button
            onClick={calculateScore}
            disabled={isButtonDisabled}
            size="lg"
            variant="success"
          >
            See Result
          </Button>
        ) : (
          <Button
            disabled={isButtonDisabled}
            onClick={handleNext}
            variant="primary"
            size="lg"
          >
            Next
          </Button>
        )}
      </div>
    </>
  );
};

export default Questionare;
