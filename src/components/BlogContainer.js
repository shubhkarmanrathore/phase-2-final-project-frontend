import React from 'react';
import Blog from './Blog';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./BlogContainer.css"

function BlogContainer({ blogs, onDeleteClick }) {
  const blogMapper = blogs.map((blog) => (
    <Col key={blog.id} md={4} className="mb-4">
      <Blog blog={blog} onDeleteClick={onDeleteClick} />
    </Col>
  ));

  return <div className='blog-container'><Row>{blogMapper}</Row></div>;
}

export default BlogContainer;
