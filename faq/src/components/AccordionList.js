
import { useState } from "react";
import Accordion from "./Accordion";

const AccordionList = ({ data }) => {
  const [accordionState, setAccordionState] = useState(0);

  const handleAccordionClick = (itemId) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <div className="row">
      {data.map((item) => (
        <div key={item.id} className="col-12 col-md-6 col-lg-4 mt-5">
        <Accordion
          key={item.id}
          item={item}
          accordionState={accordionState}
          setAccordionState={setAccordionState}
          onClick={() => handleAccordionClick(item.id)}
        />
        </div>
      ))}
    </div>
  );
};

export default AccordionList;