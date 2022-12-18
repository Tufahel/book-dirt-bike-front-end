import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { signIn } from '../../redux/actions/User';

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
      <div className="bg-cover absolute inset-0" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKnl6f7EOWD6PNWN2E5ZDungUDJwk1YdfEA&usqp=CAU)' }} />
      <div className="bg-lime-500 opacity-90 absolute inset-0" />
      <div className="flex flex-col justify-center items-center absolute inset-0 mx-10 gap-6">
        <h1 className="text-4xl font-bold text-white">Login</h1>
        <form
          className="bg-white form-container shadow-md rounded px-8 pt-6 pb-8"
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
          <input onChange={handleOnChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" name="username" id="signup-useername-field" placeholder="Username" required />
          <input onChange={handleOnChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="login-password-field" placeholder="Password" required />
          <small className="">{}</small>
          <div className="flex flex-col items-center justify-between gap-1">
            <button
              className="bg-lime-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <span className="inline-block align-baseline font-bold text-sm text-lime-500 hover:text-lime-800">
              Not a member?
              <NavLink className="text-lime-500 hover:text-lime-800" to="/signup">Signup</NavLink>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
