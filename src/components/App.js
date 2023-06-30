import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import BlogContainer from "./BlogContainer";
import Footer from "./Footer";
import BlogForm from "./BlogForm";
import BlogPage from "./BlogPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
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
    const currentDate = new Date(Date.now());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
    const newBlogPost = {
      heading: blogPost.heading,
      image: blogPost.image,
      content: blogPost.content,
      author: blogPost.author,
      likes: blogPost.likes,
      date: formattedDate,
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
        setBlogs((prevBlogs) => [...prevBlogs, data]);
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
    setBlogs((prevBlogs) =>
      prevBlogs.filter((blog) => blog.id !== deletedBlog.id)
    );
  };

  return (
    <Router>
      <div className="app">
        <Navbar
          toggleFormVisibility={toggleFormVisibility}
          onSearch={handleSearch}
        />
        {formVisible && (
          <BlogForm blog={blogPost} postBlog={postBlog} setBlog={setBlogPost}/>
        )}
        <Switch>
          <Route exact path="/">
            <BlogContainer
              blogs={searchTerm ? searchResults : blogs}
              onDeleteClick={handleDeleteBlog}
            />
          </Route>
          <Route path="/blog/:id">
            <BlogPage blogs={blogs} />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
