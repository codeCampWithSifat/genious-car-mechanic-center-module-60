import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  let errorElement;
  if (error || error2) {
    errorElement = (
      <p>
        {error?.message} {error2.message}
      </p>
    );
  }
  if (sending) {
    return <p>Sending...</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  // const handleResetPassword = async() => {
  //   const email = emailRef.current.value;
  //   await sendPasswordResetEmail(email);
  //   alert("Check Your Email And Set Your New Password")

  // }

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

        <Button
          variant="primary"
          type="submit"
          className="d-block w-100 mx-auto mt-4"
        >
          Login
        </Button>
        <p className="text-danger mt-2">{errorElement}</p>
        <p className="mt-3">
          New To On Our Service ?
          <Link to="/register" className="text-decoration-none text-danger">
            Please Register
          </Link>
        </p>
        <button
          type="button"
          onClick={async () => {
            const email = emailRef.current.value;
            const success = await sendPasswordResetEmail(email);
            if (success) {
              alert("Check Your Email And Set Your New Password");
            }
          }}
          className="btn btn-link"
        >
          Reset Password
        </button>
        <SocialLogin />
      </Form>
    </div>
  );
};

export default Login;
