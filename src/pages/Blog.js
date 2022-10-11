import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from '../components/card.js/BlogDetails';
import AppLayout from '../layout.js/AppLayout';

const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(id)

    useEffect(() => {
        fetch('/data/blogs.json')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setBlog(data.blogs.find(blog => blog.id + "" === id))
            })
    }, [id])

    return (
        <AppLayout>
            <div className="container py-5">
                <div className="col-md-10">
                    <div className="row row-cols-1 gy-4">
                        {!loading && blog ?
                            <BlogDetails
                                title={blog.title}
                                content={blog.content}
                            />
                            : <>loding...</>
                        }
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Blog;