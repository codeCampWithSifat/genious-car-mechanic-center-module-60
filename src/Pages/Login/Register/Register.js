import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {

  const handleRegistrationForm = e => {
    e.preventDefault();

    const name = e.target.name.value ;
    const email = e.target.email.value ;
    const password = e.target.password.value ;
    const confirmPasword = e.target.confirmPassword.value ;
     if (password !== confirmPasword) {
        alert("Password Not Matched")
     }
    console.log(name, email, password, confirmPasword)

  }
  return (
    <div className="container register_form">
      <h2
        style={{ marginTop: "6rem", textAlign: "center" }}
        className="text-primary "
      >
        Register Your Account Kindly
      </h2>
      <form onSubmit={handleRegistrationForm}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter Your Name"
          required
        />{" "}
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter Your Email Address"
          required
        />{" "}
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter Your Password"
          required
        />{" "}
        <input
          type="password"
          name="confirmPassword"
          id=""
          placeholder="Enter Your Confirm Password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      <p className="text-center mt-3 ">
        Already Register <Link to="/login" className="text-decoration-none text-danger">Please Login</Link>
      </p>
    </div>
  );
};

export default Register;
