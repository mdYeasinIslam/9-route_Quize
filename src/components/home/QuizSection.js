import React, { useEffect, useState } from 'react';
import QuizCard from '../card.js/QuizCard';

const QuizSection = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/quiz")
            .then(res => res.json())
            .then(data => {
                setCategories(data.data)
                setLoading(false);
            })
    }, [])
    return (
        <section className="Quiz__section">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="row row-cols-lg-2 row-cols-1 g-5">
                            {!loading && categories.length > 0 ?
                                categories.map(category =>
                                    <QuizCard
                                        id={category.id}
                                        key={category.id}
                                        name={category.name}
                                        logo={category.logo}
                                        total={category.total}
                                    />
                                )
                                : <></>
                            }
                        </div>
                    </div>
                    <div className="offset-md-1 col-md-6 d-none d-md-block">
                        <img className="img-fluid" src="/images/banner.png" alt="banner-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuizSection;