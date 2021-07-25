import React from "react";

import { AnswerObj } from "../../App";

// Styles
import {
  StyledQuestionCard,
  StyledQuestionNumber,
  StyledQuestion,
  ButtonWrapper,
  StyledAnswerOption,
} from "./QuestionCard.style";

interface QuestionCardProps {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObj | undefined;
  questionNum: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <StyledQuestionCard>
      <StyledQuestionNumber className="number">
        Question: {questionNum} / {totalQuestions}
      </StyledQuestionNumber>
      <StyledQuestion
        dangerouslySetInnerHTML={{ __html: question }}
      ></StyledQuestion>
      <div className="questions">
        {answers.map((answer) => (
          <ButtonWrapper key={answer}>
            <StyledAnswerOption
              disabled={!!userAnswer}
              value={answer}
              onClick={callback}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </StyledAnswerOption>
          </ButtonWrapper>
        ))}
      </div>
    </StyledQuestionCard>
  );
};

export default QuestionCard;
