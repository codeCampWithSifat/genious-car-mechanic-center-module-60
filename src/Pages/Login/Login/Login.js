import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="container mt-5">
      <Form className="mt-5 w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h2 className="text-primary text-center mt-5 p-2">Please Login</h2>
          <Form.Label className="mt-5">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
