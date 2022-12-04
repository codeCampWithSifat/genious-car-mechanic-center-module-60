import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from 'react-toastify';

const RequiredAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (loading || sending) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error?.message}</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
    return <div className='text-center mt-5'>
        <h3 className='text-danger'>Your Email is not verified!!</h3>
        <h5 className='text-success'> Please Verify your email address</h5>
        <button
        className='btn btn-primary'
            onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
            }}
        >
            Send Verification Email Again
        </button>
        <ToastContainer></ToastContainer>
    </div>
  }

  return children;
};

export default RequiredAuth;

/* // Email Verification Message For Fancy User Interface Experience

 1. If I want tot protect my home component at first i will do a route for home
 2. Then I will wrap my Route on RequriredAuth (Protected Route)
 3.Then  I go to the RequiredAuth.js and write this code

  import { useSendEmailVerification } from "react-firebase-hooks/auth";
    const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
    
    if (!user.emailVerified) {
    return (
      <div>
        <h2 className="text-danger container text-center">
          Your Email Is Not Verified
        </h2>
        <h5 className="test-success">Verify Your Email Address</h5>
        <button onClick={async() => {
          const success = await sendEmailVerification();
          if (success) {
            alert('Sent email');
          }
        }}>Sent Verification Email</button>
      </div>
    );
  }

     


*/
