import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    const { title, shortDes, id, count } = props;

    return (
        <div className="col">
            <div className="blog-card shadow p-4 rounded">
                <div className="count">{count}</div>
                <h3>{title}</h3>
                <p>{shortDes}</p>
                <Link to={`/blog/${id}`}>
                    <button className="btn btn-outline-danger">Read More</button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;