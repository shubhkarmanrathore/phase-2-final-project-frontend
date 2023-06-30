import React from "react";
import "./BlogPage.css";
import { useParams } from "react-router-dom";

function BlogPage({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-page">
      <h2>{blog.heading}</h2>
      <img src={blog.image}/>
      <p>Written by : {blog.author}</p>
      <p>Published : {blog.date}</p>
      <p>{blog.content}</p>
      {/* ... */}
    </div>
  );
}

export default BlogPage;
