import React from "react";

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
      <form onSubmit={postBlog}>
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={blog.author}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Blog Title"
          name="heading"
          value={blog.heading}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Enter image URL"
          className="form-input"
          title="Event Image"
          value={blog.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Blog Content"
          name="content"
          value={blog.content}
          onChange={handleInputChange}
        />
        <input type="hidden" name="date" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BlogForm;
