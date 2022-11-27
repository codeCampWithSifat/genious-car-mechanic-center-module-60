import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error2] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/checkout";
  const [agreed, setAgreed] = useState(false);
  if (error) {
    return (
      <div>
        <p>
          Error: {error?.message} {error2?.message}
        </p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    // navigate(from, { replace: true });
    console.log(user);
  }
  if (updating) {
    return <p>Updating...</p>;
  }

  const handleRegistrationForm = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const agree = e.target.terms.checked;
    // if (agreed) {
    //   createUserWithEmailAndPassword(email, password);
    // }
    // const confirmPasword = e.target.confirmPassword.value;
    // if (password !== confirmPasword) {
    //  error("Password Not Matched");
    // }
    // console.log(name, email, password, confirmPasword);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Check Your Email Or Spam Box To Verify Your Email");
    navigate("/home");
  };
  return (
    <div className="container register_form">
      <h2
        style={{ marginTop: "6rem", textAlign: "center" }}
        className="text-primary "
      >
        Register Your Account Kindly
      </h2>
      <form onSubmit={handleRegistrationForm} className="w-50 mx-auto">
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
        {/* <input
          type="password"
          name="confirmPassword"
          id=""
          placeholder="Enter Your Confirm Password"
          required
        /> */}
        <input
          onClick={() => setAgreed(!agreed)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          htmlFor="terms"
          className={
            agreed
              ? "text-primary text-center ms-2 "
              : "text-danger text-center ms-2 "
          }
        >
          Accept Our Terms And Conditions
        </label>
        <input
          disabled={!agreed}
          type="submit"
          value="Register"
          className="d-block btn btn-primary text-white"
        />
        <p className="text-center mt-2 ">
          Already Register{" "}
          <Link to="/login" className="text-decoration-none text-danger">
            Please Login
          </Link>
        </p>
        <SocialLogin />
        <ToastContainer />
      </form>
    </div>
  );
};

export default Register;
