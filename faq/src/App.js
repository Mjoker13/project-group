import { jsonText } from "./components/filecsv";
import { useState, useEffect } from "react";
import AccordionList from "./components/AccordionList";

const App = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState("");

  const handleClose = () => setShow("none");
  const handleShow = () => setShow("show");

  const updateData = (temp) => {
    let array = [...temp];
    setData(array);
  };

  const handleClick = () => {
    if (show === "" || show === "none") {
      handleShow();
    } else {
      handleClose();
    }
  };

  useEffect(() => {
    updateData(jsonText);
  }, []);

  return (
    <div className="container">
      <h1>Accordion in React usando Bootstrap</h1>
      <AccordionList data={data} onClick={handleClick} />
    </div>
  );
};

export default App;
