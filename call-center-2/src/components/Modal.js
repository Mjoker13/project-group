import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ModalInsert = () => {
  const defaultInputState = {
    firstname: "",
    lastname: "",
    cityofbirth: "",
    dob: "",
    credit: "",
  };
  const [inputState, setInputState] = useState(defaultInputState);

  const handleInputChange = (input, value) => {
    console.log(inputState);
    const newInputState = { ...inputState, [input]: value };
    setInputState(newInputState);
    console.log(inputState);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Form>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="insert your name"
                value={inputState.firstname}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
              />
              <Form.Label className="mt-3">Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="insert your surname"
                value={inputState.lastname}
                autoFocus
              />
              <Form.Label className="mt-3">City of birth</Form.Label>
              <Form.Control
                type="text"
                placeholder="insert your city of birth"
                value={inputState.cityofbirth}
                autoFocus
              />
              <Form.Label className="mt-3">Date of birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="insert your date of birth"
                value={inputState.dob}
                autoFocus
              />
              <Form.Label className="mt-3">Credit</Form.Label>
              <Form.Control
                type="number"
                placeholder="credit"
                value={inputState.credit}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInsert;
