
import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { postUser } from "./Api";

/*{
    "username": "scotttiger",
	"password": "xyz",
	"firstName": "Scott",
	"lastName": "Tiger",
	"dateOfBirth": "1988-05-13"
} */

const UserForm = ({ edit }) => {
  const { userId } = useParams();
  console.log(userId);

  const navigate = useNavigate();

  const [inputState, setInputState] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  });

  const handleInputChange = (input, value) => {
    setInputState({ ...inputState, [input]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(inputState);
    const result = await postUser(inputState);
    if (result.ok) {
      // faccio la redirect
      navigate("/");
    } else {
      console.log(result.data);
    }
  };

  return (
    <div>
      <h1>{edit ? "Edit User" : "Create User"}</h1>
      <Row>
        <Form className="col-12 col-sm-6 col-lg-4" onSubmit={handleFormSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={inputState.username}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={inputState.password}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              value={inputState.firstName}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              value={inputState.lastName}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="dateOfBirth">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="date"
              value={inputState.dateOfBirth}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
            />
          </Form.Group>
          <div className="mt-3">
            <Button type="submit">Save</Button>
            <Link to="/" className="btn btn-primary ms-2">
              Cancel
            </Link>
          </div>
        </Form>
      </Row>
    </div>
  );
};

export default UserForm;