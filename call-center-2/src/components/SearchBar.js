import { useState } from "react";
import ModalInsert from "./Modal";
import { useParams } from "react-router-dom";


const SearchBar = ({ callWhenSubmit, insert, navbarColor, layout }) => {
  const [inputValue, setInputValue] = useState("");


  const handleInput = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("SearchBar dice " + inputValue);
    callWhenSubmit(inputValue);
  };
console.log("sono il layout di searchbar",layout)
  return (
    <nav className={`navbar ${layout} mt-3`}>
      <div className="container-fluid">
        <a className="navbar-brand  text-light">Navbar</a>
        <ModalInsert insert={insert} />
        <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleInput}
            value={inputValue}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
