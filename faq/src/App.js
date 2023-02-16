import { jsonText } from "./components/filecsv";
import { useState, useEffect } from "react";
import AccordionList from "./components/AccordionList";
import { Search } from "./components/SearchBar";
const App = () => {
  const [data, setData] = useState([]);

  const filterData = (temp) => {
    const upData = jsonText.filter((el) => {
      return el.title.toLowerCase().includes(temp.toLowerCase()) || el.text.toLocaleLowerCase().includes(temp.toLowerCase());
    });
    setData(upData);
  };

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
      <Search filterData={filterData} />
      <AccordionList data={data} />
    </div>
  );
};
export default App;
