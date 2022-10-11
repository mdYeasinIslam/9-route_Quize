import React from 'react';
import { BiShow } from 'react-icons/bi';
import { toast } from 'react-toastify';

const QuestionCard = (props) => {
    const { question, options, correctAnswer, setResult, result } = props;

    const handleClickAnswer = (question, answer, correctAnswer) => {
        if (answer === correctAnswer) {
            toast.success("Correct Answer 🙂");
            const correctAnsweres = [...result.correct];
            let wrongAnswers = [...result.wrong];
            if (!result.correct.includes(question)) {
                correctAnsweres.push(question);
                wrongAnswers = wrongAnswers.filter(item => item !== question);
            }
            setResult({
                ...result,
                correct: correctAnsweres,
                wrong: wrongAnswers
            })
        } else {
            toast.error("Wrong Answer 🥲");
            const wrongAnsweres = [...result.wrong];
            let correctAnswers = [...result.correct];
            if (!result.wrong.includes(question)) {
                wrongAnsweres.push(question);
                correctAnswers = correctAnswers.filter(item => item !== question);
            }
            setResult({
                ...result,
                correct: correctAnswers,
                wrong: wrongAnsweres
            })
        }
    }

    const showCorrectAns = (correctAnswer) => {
        toast.success(correctAnswer);
    }

    return (
        <div className="col">
            <div className="question-card shadow rounded p-4">
                <BiShow onClick={() => showCorrectAns(correctAnswer)} className="show-icon" />
                <div dangerouslySetInnerHTML={{ __html: question }}></div>
                <div className="options">
                    {options.map((option, i) =>
                        <div className="form-check" key={i}>
                            <input
                                onChange={() => handleClickAnswer(question, option, correctAnswer)}
                                className="form-check-input" type="radio" name={question}
                                id={option}
                                value={option}
                            />
                            <label className="form-check-label" htmlFor={option} >
                                {option}
                            </label>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;