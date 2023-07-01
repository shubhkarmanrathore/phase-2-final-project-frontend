import React, { useState } from "react";
import "./BlogPage.css";
import { useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BlogPage({ blogs, fetchBlogsData }) {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id, 10));
  console.log(id);

  const [isEditing, setIsEditing] = useState(false);
  const [editedBlog, setEditedBlog] = useState(blog);
  console.log(blog);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const saveEditedBlog = () => {
    fetch(`https://json-server-2-i5l2.onrender.com/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        setEditedBlog(data);
        console.log(data);
        setIsEditing(false);
        fetchBlogsData();
      });
  };

  if (!editedBlog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-page">
      {isEditing ? (
        <>
          <h2>Edit Blog</h2>
          <Form>
            <Form.Group className="mb-3">
              <label htmlFor="heading">Heading:</label>
              <Form.Control
                type="text"
                name="heading"
                value={editedBlog.heading}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <label htmlFor="image">Image URL:</label>
              <Form.Control
                type="text"
                name="image"
                value={editedBlog.image}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <label htmlFor="author">Author:</label>
              <Form.Control
                type="text"
                name="author"
                value={editedBlog.author}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <label htmlFor="content">Content:</label>
              <Form.Control
                as="textarea"
                name="content"
                value={editedBlog.content}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
          <Button variant="primary" onClick={saveEditedBlog}>
            Save changes
          </Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <h2>{editedBlog.heading}</h2>
          <img
            src={editedBlog.image}
            alt={editedBlog.image}
            className="editedBlog-image"
          />
          <p>Written by: {editedBlog.author}</p>
          <p>Published: {editedBlog.date}</p>
          <p>{editedBlog.content}</p>
          <Button variant="primary" onClick={handleEditClick}>
            Edit
          </Button>
        </>
      )}
    </div>
  );
}

export default BlogPage;
