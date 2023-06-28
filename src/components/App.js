import React, { useState, useEffect } from 'react';
import "./App.css";
import Navbar from './Navbar';
import BlogContainer from './BlogContainer';
import Footer from './Footer';
import BlogForm from "./BlogForm";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [blogPost, setBlogPost] = useState({
    heading: "",
    image: "",
    content: "",
    author: "",
    likes: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  

  const postBlog = (event) => {
    event.preventDefault();

    // Get the current date and time
    const currentDate = new Date();
    const currentDateTime = currentDate.toISOString();

    // Create a new blog post object
    const newBlogPost = {
      heading: blogPost.heading,
      image: blogPost.image,
      content: blogPost.content,
      author: blogPost.author,
      likes: blogPost.likes,
      date: currentDateTime,
    };
    

    fetch("https://json-server-2-i5l2.onrender.com/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlogPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs((prevBlogs) => [...prevBlogs, data]); // Add the new blog post to the state
        setBlogPost({
          author: "",
          heading: "",
          image: "",
          content: "",
          likes: 0,
        });
      });
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    fetch("https://json-server-2-i5l2.onrender.com/toys")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  useEffect(() => {
    const filteredBlogs = blogs.filter((blog) =>
      blog.heading.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBlogs);
  }, [blogs, searchTerm]);

  const handleDeleteBlog = (deletedBlog) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== deletedBlog.id));
  };


  return (
    <div className='app'>
      <Navbar
        toggleFormVisibility={toggleFormVisibility}
        toggleDropdown={toggleDropdown}
        dropdownVisible={dropdownVisible}
        onSearch={handleSearch}
      />
      {formVisible && (
       <BlogForm blog={blogPost} postBlog={postBlog} setBlog={setBlogPost} />

      )}
      <BlogContainer blogs={searchTerm ? searchResults : blogs}  onDeleteClick={handleDeleteBlog} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
