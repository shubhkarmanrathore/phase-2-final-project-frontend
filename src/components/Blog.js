import React, { useState } from "react";
import "./Blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Blog({ blog, onDeleteClick }) {
  const [likes, setLikes] = useState(blog.likes);

  
  function postLikes() {
    fetch(`https://json-server-2-i5l2.onrender.com/blogs/${blog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    })
    .then((res) => res.json())
    .then((data) => setLikes(parseInt(data.likes)));
  }
  
  function deleteBlog() {
    fetch(`https://json-server-2-i5l2.onrender.com/blogs/${blog.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        onDeleteClick(blog);
      });
  }

  return (
    <main>
      <div className="blog">
        <img
          variant="top"
          className="blog-image"
          src={blog.image}
          alt={blog.heading}
        />
        <h2 className="blog-heading">{blog.heading}</h2>
        <p className="blog-text">{blog.author}</p>
        <p className="blog-date">{blog.date}</p>
        <button className="like-btn" onClick={postLikes}>
          👍
        </button>
        <p>Likes: {likes}</p>
        <Link to={`/blog/${blog.id}`}>
          <Button variant="primary">Read More</Button>
        </Link>
        <Button variant="danger" onClick={() => deleteBlog(blog)}>
          DELETE
        </Button>
      </div>
    </main>
  );
}

export default Blog;
