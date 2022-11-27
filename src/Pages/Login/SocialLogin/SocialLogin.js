import React from 'react';
import google from "../../../images/social/google.png"
import facebook from "../../../images/social/facebook.png"
import github from "../../../images/social/github.png"
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let errorElement;
    if (error || error1) {
        errorElement = <p>{error?.message} {error1?.message}</p>
      }
      if (loading || loading1) {
        return <Loading />
      }
      if (user || user1) {
        navigate("/checkout")
      }

  return (
    <div>
      <div className='d-flex align-items-center'>
        <div style={{height : "1px"}} className='bg-primary w-50'></div>
        <p className='mt-3 px-2'>Or</p>
        <div style={{height : "1px"}} className='bg-primary w-50'></div>
      </div>

      <div>
      <p className='container mt-5 text-danger text-center'>{errorElement}</p>
        <button onClick={() => signInWithGoogle()} className='btn btn-secondary w-50 d-block mx-auto '>
            <img src={google}   alt="" />
            <span className=""> Google Sign In</span>
        </button>
        <button className='btn btn-secondary w-50 d-block mx-auto mt-2'>
            <img src={facebook}   alt="" />
            <span className=""> Facebook Sign In</span>
        </button>
        <button onClick={() => signInWithGithub()} className='btn btn-secondary w-50 d-block mx-auto mt-2'>
            <img src={github}   alt="" />
            <span className=""> Github Sign In</span>
        </button>
        
      </div>
    </div>
  )
}

export default SocialLogin
