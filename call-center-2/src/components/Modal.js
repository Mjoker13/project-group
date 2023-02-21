import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ModalInsert = ({ insert }) => {
  const defaultInputState = {
    firstname: "",
    lastname: "",
    cityofbirth: "",
    dob: "",
    cretid: "",
  };
  const [inputState, setInputState] = useState(defaultInputState);
  const [inputErrors, setInputErrors] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (input, value) => {
    const newInputState = { ...inputState, [input]: value };
    setInputState(newInputState);
  };

  const validate = (inputObject) => {
    const errorObj = {};
    if (inputObject.firstname === "") {
      errorObj.firstname = "Subscriber firstname is mandatory";
    }
    if (inputObject.lastname === "") {
      errorObj.lastname = "Subscriber lastname is mandatory";
    }
    if (inputObject.cityofbirth === "") {
      errorObj.cityofbirth = "Subscriber cityofbirth is mandatory";
    }
    if (inputObject.dob >= Date.now()) {
      errorObj.dob = "not valid";
    }
    if (inputObject.cretid < 0) {
      errorObj.cretid = "credit more 0";
    }
    return errorObj;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorObject = validate(inputState);
    if (Object.keys(errorObject).length === 0) {
      insert(inputState);
      setInputState(defaultInputState);
    } else {
      setInputErrors(errorObject);
    }
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Insert a new Subscriber
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert here</Modal.Title>
        </Modal.Header>
        <Modal.Body className=" bg-secondary text-white">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="" controlId="firstname">
              <Form.Label className="mt-3">First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="insert your name"
                value={inputState.firstname}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputErrors.firstname ? true : false}
              />
              <Form.Control.Feedback type="invalid" className="text-dark ">
                {inputErrors.firstname}
              </Form.Control.Feedback>
              <Form.Label className="mt-3">Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="insert your surname"
                value={inputState.lastname}
                onChange={(e) => {
                  handleInputChange("lastname", e.target.value);
                }}
                isInvalid={inputErrors.lastname ? true : false}
              />
              <Form.Control.Feedback type="invalid" className="text-dark ">
                {inputErrors.lastname}
              </Form.Control.Feedback>
              <Form.Label className="mt-3">City of birth</Form.Label>
              <Form.Control
                type="text"
                placeholder="insert your city of birth"
                value={inputState.cityofbirth}
                onChange={(e) => {
                  handleInputChange("cityofbirth", e.target.value);
                }}
                isInvalid={inputErrors.cityofbirth ? true : false}
              />
              <Form.Control.Feedback type="invalid" className="text-dark ">
                {inputErrors.cityofbirth}
              </Form.Control.Feedback>
              <Form.Label className="mt-3">Date of birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="insert your date of birth"
                value={inputState.dob}
                onChange={(e) => {
                  handleInputChange("dob", e.target.value);
                }}
                isInvalid={inputErrors.dob ? true : false}
              />
              <Form.Control.Feedback type="invalid" className="text-dark ">
                {inputErrors.dob}
              </Form.Control.Feedback>
              <Form.Label className="mt-3">Credit</Form.Label>
              <Form.Control
                type="number"
                step=".01"
                placeholder="Credit"
                value={inputState.cretid}
                onChange={(e) => {
                  handleInputChange("cretid", e.target.value);
                }}
                isInvalid={inputErrors.credit ? true : false}
              />
              <Form.Control.Feedback type="invalid" className="text-dark ">
                {inputErrors.credit}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInsert;
