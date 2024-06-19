import React, { useState } from 'react';

const datas = [
  {
    question: 'What is 1+1',
    optionA: '2',
    optionB: '3',
    optionC: '4',
    optionD: '5',
    answer: 'optionA',
  },
  {
    question: 'What is 2+1',
    optionA: '2',
    optionB: '3',
    optionC: '4',
    optionD: '5',
    answer: 'optionB',
  },
  {
    question: 'What is 3+1',
    optionA: '2',
    optionB: '3',
    optionC: '4',
    optionD: '5',
    answer: 'optionC',
  },
  {
    question: 'What is 4+1',
    optionA: '2',
    optionB: '3',
    optionC: '4',
    optionD: '5',
    answer: 'optionD',
  },
  {
    question: 'What is 1+2',
    optionA: '2',
    optionB: '3',
    optionC: '4',
    optionD: '5',
    answer: 'optionB',
  },
  {
    question: 'What is 1+3',
    optionA: '2',
    optionB: '3',
    optionC: '4',
    optionD: '5',
    answer: 'optionC',
  },
  {
    question: 'What is 1+4',
    optionA: '2',
    optionB: '3',
    optionC: '4',
    optionD: '5',
    answer: 'optionD',
  },
];

const QuizApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);


  const handleAnswer = (answer) => {
    if (answer === datas[currentIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentIndex + 1;
    if (nextQuestion < datas.length) {
      setCurrentIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < datas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your final score is {score} out of {datas.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{datas[currentIndex].question}</h2>
          <button onClick={() => handleAnswer('optionA')}>{datas[currentIndex].optionA}</button>
          <button onClick={() => handleAnswer('optionB')}>{datas[currentIndex].optionB}</button>
          <button onClick={() => handleAnswer('optionC')}>{datas[currentIndex].optionC}</button>
          <button onClick={() => handleAnswer('optionD')}>{datas[currentIndex].optionD}</button>
          <p>Current Score: {score}</p>
          <button onClick={handlePrevious} disabled={currentIndex === 0}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currentIndex === datas.length - 1}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;