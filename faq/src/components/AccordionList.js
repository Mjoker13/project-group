import Accordion from "./Accordion";

const AccordionList = ({ data}) => {
  return (
    <div className=" row  ">
      {data.map((el) => {
        return (
          <div key={el.id} className=" col-12 col-md-6 col-lg-4 mt-5">
            <Accordion item={el}  />
          </div>
        );
      })}
    </div>
  );
};
export default AccordionList;
