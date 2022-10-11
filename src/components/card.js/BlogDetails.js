import React from 'react';

const BlogDetails = (props) => {
    const { title, content } = props;
    return (
        <article className="blog-details">
            <h1 className="title">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </article>
    );
};

export default BlogDetails;