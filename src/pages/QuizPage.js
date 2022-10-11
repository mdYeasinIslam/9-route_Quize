import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quiz from '../components/quiz/Quiz';
import AppLayout from '../layout.js/AppLayout';

const QuizPage = () => {
    const { id } = useParams();
    const [Quizes, setQuizes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({
        answered: 0,
        correct: [],
        wrong: []
    })

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
            .then(res => res.json())
            .then(data => {
                setQuizes(data.data)
                setLoading(false);
            })
    }, [id])

    return (
        <AppLayout>
            {!loading && Quizes ?
                <div className="container py-5">
                    <div className="row gy-3">
                        <div className="col-md-8">
                            <h1>Quiz of {Quizes.name}</h1>
                            <Quiz
                                quiz={Quizes.questions}
                                setResult={setResult}
                                result={result}
                            />

                        </div>
                        <div className="col-md-3">
                            <div className="shadow border rounded p-3 result-box">
                                <h3>{Quizes.name} Quizes</h3>
                                <h6>Result:</h6>
                                <p>Total Quiz: {Quizes.total}</p>
                                <p>Wrong: {result.wrong.length}</p>
                                <p>Correct: {result.correct.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
                : <>Loading...</>
            }
        </AppLayout>
    );
};

export default QuizPage;