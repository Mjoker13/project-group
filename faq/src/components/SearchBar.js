import { useState, useEffect } from "react";

export const Search = ({ filterData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    filterData(inputValue);
  }, [inputValue]);

  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};
