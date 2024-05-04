import React from "react";

const Header = ({ currentQuestionIndex, totalQuestions, currentQuestion }) => {
  return (
    <div>
      <h3>Razvoj Veb Aplikacija: Ispit</h3>
      <h2>
        Question {currentQuestionIndex + 1} / {totalQuestions}
      </h2>

      <h2>{currentQuestion}</h2>
    </div>
  );
};

export default Header;
