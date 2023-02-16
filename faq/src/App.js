import { jsonText } from "./components/filecsv";
import { useState, useEffect } from "react";
import AccordionList from "./components/AccordionList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [data, setData] = useState([]);

  const updateData = (temp) => {
    let array = [...temp];
    setData(array);
  };

  useEffect(() => {
    updateData(jsonText);
  }, []);

  return (
    <div className="container text-center">
      <h1>Accordion in React usando Bootstrap</h1>
      <SearchBar />
      <AccordionList data={data} />
    </div>
  );
};
export default App;
