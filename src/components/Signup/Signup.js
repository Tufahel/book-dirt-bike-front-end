import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signUp } from '../../redux/actions/User';
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
      <div className="bg-cover absolute inset-0" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKnl6f7EOWD6PNWN2E5ZDungUDJwk1YdfEA&usqp=CAU)' }} />
      <div className="bg-lime-500 opacity-90 absolute inset-0" />
      <div className="flex flex-col justify-center items-center absolute inset-0 mx-10 gap-6">
        <h1 className="text-white">Sign Up</h1>
        <form
          className="signup-form bg-white shadow-md rounded px-8 pt-6 pb-8"
          onSubmit={handleLogin}
        >
          { errorSignup && (
          <div className="">
            <p className="">{toast.error('Unable to Login, Please check yor details')}</p>
          </div>
          )}
          <input
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="text"
            name="username"
            placeholder="Username"
            required
            value={userRegister.username}
          />
          <input
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="text"
            name="full_name"
            placeholder="Full Name"
            required
            value={userRegister.full_name}
          />
          <input
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={userRegister.email}
          />
          <input
            onChange={handleOnChange}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength="6"
            value={userRegister.password}
          />
          <input
            onChange={handleOnChange}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            required
            minLength="6"
            value={userRegister.confirm_password}
          />
          <input
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="date"
            name="date_of_birth"
            placeholder="Date"
            required
            value={userRegister.date_of_birth}
          />
          { userRegister.password !== userRegister.confirm_password
          && <div>{toast.error('password not matched')}</div>}
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
          <div className="flex flex-col items-center justify-between gap-1">
            <button
              className="bg-lime-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Signup
            </button>
            <p className="inline-block align-baseline font-bold text-sm text-lime-500 hover:text-lime-800">
              Already a member?
              <NavLink className="text-lime-500 hover:text-lime-800" to="/login">
                Login
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
