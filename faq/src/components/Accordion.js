import { useState } from "react";


const Accordion = ({ item}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
   
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className="accordion">
        <h2 className="accordion-header">
          <button
            className="btn  btn-primary"
            type="button"
            onClick={toggleExpand}
          >
            {isExpanded ? <span>&#8593;</span> : <span>&#8595;</span>}
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
