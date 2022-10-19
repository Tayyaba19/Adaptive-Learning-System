import React, { useState } from 'react';
import "./keywords.css";
export default function Keywords() {
	const questions = [
		{
			questionText: 'How many bytes are reserved by character in c?',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '2', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '8', isCorrect: false },
			],
		},
		{
			questionText: 'What is the process to create increment and decrement statement in C? ',
			answerOptions: [
				{ answerText: '- , +', isCorrect: false },
				{ answerText: '++ , --', isCorrect: true },
				{ answerText: 'both a and b', isCorrect: false },
				{ answerText: 'none of the', isCorrect: false },
			],
		},
		{
			questionText: 'printf ("Result is = %d ", (24 / 5) * 5.0);',
			answerOptions: [
				{ answerText: '20.000000', isCorrect: true },
				{ answerText: '20', isCorrect: false },
				{ answerText: 'runtime error', isCorrect: false },
				{ answerText: '0', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
