const Accordion = ({ item, click }) => {
  console.log("marco" + { click });
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
            onClick={click}
          >
            {item.title}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse "
          collapse={click}
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
