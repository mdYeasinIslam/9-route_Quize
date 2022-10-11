import AppLayout from '../layout.js/AppLayout';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Statistics = () => {
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

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Quiz Statistics',
            },
        },
    };

    const labels = categories.length > 0 ? categories.map(item => item.name) : [];

    const data = {
        labels,
        datasets: [
            {
                label: 'Quiz',
                data: categories.length > 0 ? categories.map(item => item.total) : [],
                backgroundColor: '#FFE3DF',
            }
        ],
    };

    return (
        <AppLayout>
            {!loading && categories.length > 0 ?
                <div className="container">
                    <div className="col-md-8 mx-auto">
                        <Bar options={options} data={data} />
                    </div>
                </div>
                : <>loading...</>
            }
        </AppLayout>
    );
};

export default Statistics;