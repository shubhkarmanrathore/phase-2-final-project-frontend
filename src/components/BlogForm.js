import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function BlogForm({ blog, postBlog, setBlog }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  return (
    <div>
      <Form onSubmit={postBlog}>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Control
            type="text"
            placeholder="Author"
            name="author"
            value={blog.author}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formHeading">
          <Form.Control
            type="text"
            placeholder="Blog Title"
            name="heading"
            value={blog.heading}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImage">
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            name="image"
            value={blog.image}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContent">
          <Form.Control
            as="textarea"
            placeholder="Blog Content"
            name="content"
            value={blog.content}
            onChange={handleInputChange}
          />
        </Form.Group>

        <input type="hidden" name="date" />

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default BlogForm;
