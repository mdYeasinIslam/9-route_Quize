import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = (props) => {
    const { name, logo, total, id } = props;
    return (
        <div className="col">
            <Link to={`/quiz/${id}`}>
                <div className="quiz-card shadow p-3 rounded">
                    <h3 className="badge rounded-pill bg-danger">Quiz: {total}</h3>
                    <img className="img-fluid" src={logo} alt={name} />
                    <div className="d-flex align-items-center justify-content-between">
                        <h5>{name}</h5>
                        <button className="btn btn-outline-danger">Start</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default QuizCard;