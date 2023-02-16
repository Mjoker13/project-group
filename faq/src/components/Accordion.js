const Accordion = ({ item, accordionState, setAccordionState, onClick }) => {
  const isExpanded = accordionState ? accordionState[item.id] : false;

  const toggleExpand = () => {
    const newAccordionState = { ...accordionState };

    Object.keys(newAccordionState).forEach((id) => {
      if (id !== item.id) {
        newAccordionState[id] = false;
      }
    });

    newAccordionState[item.id] = !isExpanded;

    setAccordionState(newAccordionState);
  };

  const buttonClassNames = "accordion-button" + (isExpanded ? "" : " collapsed");


  return (
    <div className="accordion">
        <h2 className="accordion-header">
          <button className={buttonClassNames} type="button" onClick={toggleExpand}>
          {item.title}
          </button>
        </h2>
        <div
          className={`collapse ${isExpanded ? "show my=0" : "none"}`}
        >
          <div className="accordion-body">{item.text}</div>
        </div>
    </div>
  );
};

export default Accordion;
