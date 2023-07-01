import React from "react";
import "./Search.css";
import Form from "react-bootstrap/Form";

function Search({ onSearch }) {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleInputChange}
      />
    </Form>
  );
}

export default Search;
