import { useState } from "react";

const SearchBar = () => {

const [inpuValue, setInputValue] = useState('');

const handleInputChange = (event)=>{
  setInputValue(event.target.value);
}

  return (
    <div className="navbar bg-body-tertiary">
      <div className="container-fluid justify-content-center">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search FAQ"
            aria-label="Search"
            onChange={handleInputChange}
          ></input>
          <button className="btn btn-outline-dark" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
