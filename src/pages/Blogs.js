import React, { useEffect, useState } from 'react';
import BlogCard from '../components/card.js/BlogCard';
import AppLayout from '../layout.js/AppLayout';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true)
    console.log(blogs)

    useEffect(() => {
        fetch('/data/blogs.json')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setBlogs(data.blogs);
            })
    }, [])

    return (
        <AppLayout>
            <div className="container py-5">
                <div className="col-md-10 mx-auto">
                    <div className="row row-cols-1 gy-4">
                        {!loading && blogs.length > 0 ?
                            blogs.map((blog, i) =>
                                <BlogCard
                                    key={blog.id}
                                    title={blog.title}
                                    id={blog.id}
                                    shortDes={blog.shortDes}
                                    count={i + 1}
                                />
                            )
                            : <>Loading...</>
                        }
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Blogs;