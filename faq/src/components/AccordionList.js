import Accordion from "./Accordion";

const AccordionList = ({ data, onClick }) => {
  return (
    <div>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <Accordion item={el} click={onClick} />
          </div>
        );
      })}
    </div>
  );
};
export default AccordionList;
