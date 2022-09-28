import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { signIn } from '../../redux/actions/User';
import './Login.css';

const Login = () => {
  const { errorSignin = null, loadingSignin = false } = useSelector((state) => state.SigninReducer);
  const [userSignin, setSignin] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signIn(userSignin, navigate));
  };

  const handleOnChange = (event) => {
    setSignin((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <div className="main-login">
        <h1 className="">Login</h1>
        <form
          className="form-container form-group"
          onSubmit={handleLogin}
        >
          { loadingSignin && (
          <div className="">
            <div className="">
              <ThreeDots
                height="180"
                width="180"
                radius="3"
                color="#98be20"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          </div>
          )}

          { errorSignin && (
          <p className="text-red-500 font-italic">Invalid email/password</p>
          )}
          <input onChange={handleOnChange} className="form-control m-3" type="text" name="username" id="signup-useername-field" placeholder="Username" required />
          <input onChange={handleOnChange} className="form-control m-3" type="password" name="password" id="login-password-field" placeholder="Password" required />
          <small className="">{}</small>
          <span className="">
            Not a member?
            <NavLink className="" to="/signup">Signup</NavLink>
          </span>
          <button
            className="btn btn-primary m-3"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
