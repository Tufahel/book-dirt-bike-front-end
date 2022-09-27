import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/actions/User';
import Navigation from '../Navigation/Navigation';
import './Signup.css';

const Signup = () => {
  const { errorSignup = null, loadingSignup = false } = useSelector((state) => state.SignupReducer);
  const [userRegister, setRegister] = useState({
    username: '',
    full_name: '',
    email: '',
    date_of_birth: '',
    password: '',
    confirm_password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signUp(userRegister, navigate));
  };

  const handleOnChange = (event) => {
    setRegister((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Navigation />
      <div className="mainSign">
        <h1 className="">Sign Up</h1>
        <form
          className="signup-form"
          onSubmit={handleLogin}
        >
          { errorSignup && (
          <div className="">
            <p className="">Username/Email already exist</p>
          </div>
          )}
          <input
            onChange={handleOnChange}
            className=""
            type="text"
            name="username"
            placeholder="Username"
            required
            value={userRegister.username}
          />
          <input
            onChange={handleOnChange}
            className=""
            type="text"
            name="full_name"
            placeholder="Full Name"
            required
            value={userRegister.full_name}
          />
          <input
            onChange={handleOnChange}
            className=""
            type="email"
            name="email"
            placeholder="Email"
            required
            value={userRegister.email}
          />
          <input
            onChange={handleOnChange}
            className="w-full sm:w-3/4 border-1 border-main  focus:border-main"
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength="6"
            value={userRegister.password}
          />
          <input
            onChange={handleOnChange}
            className="w-full sm:w-3/4 border-1 border-main  focus:border-main"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            required
            minLength="6"
            value={userRegister.confirm_password}
          />
          <textarea
            onChange={handleOnChange}
            className="w-full sm:w-3/4 border-1 border-main focus:border-main"
            type="date"
            name="date_of_birth"
            placeholder="Date"
            required
            value={userRegister.date_of_birth}
          />
          { loadingSignup && (
          <div className="">
            <div className="">
              <ThreeDots
                height="180"
                width="180"
                radius="3"
                color="#98be20"
                ariaLabel=""
                wrapperStyle
                wrapperClass
              />
            </div>
          </div>
          )}
          <small className="">{}</small>
          <p className="">
            Already a member?
            <NavLink className="" to="/login">
              Login
            </NavLink>
          </p>
          <button
            className=""
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
