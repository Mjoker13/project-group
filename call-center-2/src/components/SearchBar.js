import { useState } from "react";
import ModalInsert from "./Modal";

const SearchBar = ({ callWhenSubmit, insert, nav }) => {
  const [inputValue, setInputValue] = useState("");
  const [layout, setLayout] = useState({
    NavbarColor: "navbar bg-dark mt-3",
    buttonColor: "btn btn-outline-success",
  });

  const handleInput = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("SearchBar dice " + inputValue);
    callWhenSubmit(inputValue);
  };

  return (
    <nav className={layout.NavbarColor}>
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
          <button className={layout.buttonColor} type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
