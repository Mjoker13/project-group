import CallPhone from "./CallPhone";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const CallPhoneList = ({ data = [] }) => {
  try {
    return (
      <div className="mb-2">
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          drop="down"
          title="CallPhone List"
          className="mt-2 "
          size="lg"
        >
          <Dropdown.Item>
            {data.map((element) => {
              return <CallPhone item={element} key={element.id} />;
            })}
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  } catch (error) {
    console.log("No data to display");
  }
};
export { CallPhoneList };
