import React from "react";
import Blog from "./Blog";
import "./BlogContainer.css";

function BlogContainer({ blogs, onDeleteClick }) {
  const blogMapper = blogs.map((blog) => (
    <Blog blog={blog} onDeleteClick={onDeleteClick} />
  ));

  return <div className="blog-container">{blogMapper}</div>;
}

export default BlogContainer;
