import React from "react";
import "./Blog.css";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import BlogModal from "./BlogModal";

function Blog({ blog, onDeleteClick }) {
  function deleteBlog() {
    fetch(`https://json-server-2-i5l2.onrender.com/toys/${blog.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        onDeleteClick(blog);
      });
  }

  return (
    <Card className="bg-light text-black" style={{ width: '300px'}}>
      <Card.Img variant="top" className="blog-image" src={blog.image} alt={blog.heading} />
      <Card.Title className="blog-heading">{blog.heading}</Card.Title>
      <Card.Text className="blog-text">{blog.author}</Card.Text>
      <Card.Text className="blog-text">{blog.content}</Card.Text>
      <p className="blog-date">{blog.date}</p>
      <BlogModal blog={blog}/>
      <Button variant="primary" onClick={deleteBlog}>DELETE</Button>
    </Card>
  );
}

export default Blog;
