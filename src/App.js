import React, { useState } from "react";
import { questions, questionType } from "./utils";
import { Questionare, Result, Footer } from "./components";
import { Container, Row, Col } from "react-bootstrap";

import "./style.less";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({
    singleAnswers: [],
    multipleAnswers: [],
  });
  const [activeAnswers, setActiveAnswers] = useState({});

  const [showResult, setShowResult] = useState(false);
  const [examPassed, setExamPassed] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);

  const currentQuestionType = questions[currentQuestionIndex].type;

  const currentQuestionMultipleAnswers =
    answers.multipleAnswers[currentQuestionIndex];

  const isButtonDisabled = !answerSelected;

  const allAnswers = [
    ...answers.singleAnswers,
    ...answers.multipleAnswers,
  ].filter((val) => val !== undefined);

  const normalizedUserSelectedAnswers = allAnswers?.map((answer) => {
    if (Array.isArray(answer)) {
      return answer.sort().toString();
    }
    return answer;
  });

  const totalQuestions = questions.length;

  const isMultipleCorrectOptionsType =
    currentQuestionType === questionType.MULTIPLE_CORRECT_OPTIONS;

  console.log(
    `Pitanje ${questions[currentQuestionIndex].id}`,
    questions[currentQuestionIndex]
  );

  console.log("normalizedUserSelectedAnswers", normalizedUserSelectedAnswers);
  const handleAnswer = (answer) => {
    const newSingleAnswers = [...answers.singleAnswers];
    let newMultipleAnswers = [...answers.multipleAnswers];
    const newActiveAnswers = { ...activeAnswers };

    if (isMultipleCorrectOptionsType) {
      if (
        !currentQuestionMultipleAnswers ||
        currentQuestionMultipleAnswers.indexOf(answer) === -1
      ) {
        newMultipleAnswers[currentQuestionIndex] = [
          ...(currentQuestionMultipleAnswers || []),
          answer,
        ];
      } else {
        newMultipleAnswers[currentQuestionIndex].splice(
          currentQuestionMultipleAnswers.indexOf(answer),
          1
        );
      }

      if (
        !activeAnswers[questions[currentQuestionIndex].id] ||
        activeAnswers[questions[currentQuestionIndex].id].indexOf(answer) === -1
      ) {
        newActiveAnswers[questions[currentQuestionIndex].id] = [
          ...(activeAnswers[questions[currentQuestionIndex].id] || []),
          answer,
        ];
      } else {
        newActiveAnswers[questions[currentQuestionIndex].id].splice(
          newActiveAnswers[questions[currentQuestionIndex].id].indexOf(answer),
          1
        );
      }
    } else {
      newSingleAnswers[currentQuestionIndex] = answer;
      newActiveAnswers[questions[currentQuestionIndex].id] = answer;
      setAnswerSelected(true);
    }

    if (
      isMultipleCorrectOptionsType &&
      newMultipleAnswers[currentQuestionIndex].length < 1
    ) {
      setAnswerSelected(false);
    } else {
      setAnswerSelected(true);
    }

    setAnswers({
      singleAnswers: newSingleAnswers,
      multipleAnswers: newMultipleAnswers,
    });
    setActiveAnswers(newActiveAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      setAnswerSelected(false);
      setActiveAnswers({});
    }
  };

  const resetResult = () => {
    setCurrentQuestionIndex(0);
    setAnswers({
      singleAnswers: [],
      multipleAnswers: [],
    });
    setShowResult(false);
    setAnswerSelected(false);
    setActiveAnswers({});
  };

  const calculateScore = () => {
    let correctCount = 0;
    normalizedUserSelectedAnswers.forEach((answer, index) => {
      const question = questions[index];
      if (
        question.type === questionType.SINGLE_CORRECT_OPTION &&
        answer === question.correctAnswers.toString()
      ) {
        correctCount++;
      } else if (
        question.type === questionType.MULTIPLE_CORRECT_OPTIONS &&
        answer === question.correctAnswers.toString()
      ) {
        correctCount++;
      }
    });

    setCorrectAnswers(correctCount);
    const scoreCount = correctCount / totalQuestions;
    setScore(scoreCount);
    setShowResult(true);
    setExamPassed(scoreCount >= 0.5);
  };

  return (
    <Container fluid className="container">
      <Row
        className="justify-content-center align-items-center"
        style={{ width: "100%" }}
      >
        <Col xs={12} md={10} lg={8} xl={6}>
          <div className={`container-content`}>
            {showResult ? (
              <Result
                passed={examPassed}
                correctAnswers={correctAnswers}
                score={score}
                totalQuestions={totalQuestions}
                retakeTest={resetResult}
              />
            ) : (
              <Questionare
                activeAnswers={activeAnswers}
                currentQuestionIndex={currentQuestionIndex}
                isMultipleCorrectOptionsType={isMultipleCorrectOptionsType}
                answers={allAnswers}
                isButtonDisabled={isButtonDisabled}
                handleNext={handleNext}
                handleAnswer={handleAnswer}
                calculateScore={() => calculateScore()}
              />
            )}
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
