import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    alert("Submit Your Data Successfully");

    console.log("email", email, "password", password);
  };

  return (
    <div className="container mt-5">
      <Form className="mt-5 w-50 mx-auto" onSubmit={handleLoginForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mt-5">Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="mt-3">
          New To On Our Service{" "}
          <Link to="/register" className="text-decoration-none text-danger">
            Please Register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
