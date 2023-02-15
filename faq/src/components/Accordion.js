import { useState } from "react";

const Accordion = ({ item, click }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="collapseOne"
            onClick={toggleExpand}
          >
            {item.title}
          </button>
        </h2>
        <div
          id="collapseOne"
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
