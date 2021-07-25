import React, { useState } from "react";
import { fetchTriviaQuestions } from "./API";

import { Difficulty, QuestionState } from "./API";

//components
import QuestionCard from "./components/QuestionCard";

//styles
import {
  StyledWrapper,
  StyledScore,
  StyledHeader,
  StyledStartButton,
  StyledNextButton,
} from "./App.styles";

export type AnswerObj = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchTriviaQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user answers
      const answer = e.currentTarget.value;
      //Check answer against correct values
      const correct = questions[number].correct_answer === answer;

      //add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // save answer in the array for user answers
      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };

  const nextQuestion = () => {
    // move to next question if not the last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObj[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  return (
    <StyledWrapper>
      <div className="app">
        <StyledHeader className="app-title">Trivia App</StyledHeader>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <StyledStartButton className="start-btn" onClick={startTrivia}>
            Start
          </StyledStartButton>
        ) : null}
        {!gameOver ? (
          <StyledScore className="score">Score: {score} </StyledScore>
        ) : null}
        {loading && <p>Loading Questions...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS && (
            <StyledNextButton onClick={nextQuestion} className="next-btn">
              Next Question
            </StyledNextButton>
          )}
      </div>
    </StyledWrapper>
  );
}

export default App;
