import { useState } from "react";

const Accordion = ({ item, accordionState, setAccordionState, onClick }) => {
  const isExpanded = accordionState[item.id];

  const toggleExpand = () => {
    setAccordionState((prevState) => ({
      ...prevState,
      [item.id]: !isExpanded,
    }));
    onClick();
  };

  const buttonClassNames = "accordion-button" + (isExpanded ? "" : " collapsed");

  return (
    <div className="accordion">
      <div className="accordion">
        <h2 className="accordion-header">
          <button className={buttonClassNames} type="button" onClick={toggleExpand}>
            <span>&#8595;</span>
            {isExpanded ? " Hide" : " Show"}
            {item.title}
          </button>
        </h2>
        <div
          className={`collapse ${isExpanded ? "show" : "none"}`}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{item.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
