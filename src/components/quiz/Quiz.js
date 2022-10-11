import React from 'react';
import QuestionCard from '../card.js/QuestionCard';

const Quiz = (props) => {
    const { quiz, setResult, result } = props;
    return (
        <section>
            <div className="row row-cols-1 gy-4">
                {quiz.map(question =>
                    <QuestionCard
                        key={question.id}
                        question={question.question}
                        options={question.options}
                        correctAnswer={question.correctAnswer}
                        setResult={setResult}
                        result={result}
                    />
                )}
            </div>
        </section>
    );
};

export default Quiz;