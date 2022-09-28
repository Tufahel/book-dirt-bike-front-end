import React from 'react';
import './Navigation.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions/User';
import bike from '../images/bike.png';

function Navigation() {
  const user = localStorage.getItem('user');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignout() {
    dispatch(signOut(navigate('/')));
  }

  return (
    <>
      <nav className="w-60 h-screen shadow-md bg-white absolute">
        <div className="divider">
          <div className="pt-4 pb-2 px-6">
            <a className="no-underline" href="#!">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img src={bike} className="rounded-full w-16" alt="Avatar" />
                </div>
                <div className="grow ml-3">
                  <p className="text-sm font-semibold text-primary">Dirt Bikes</p>
                </div>
              </div>
            </a>
          </div>
          <div className="relative">
            <ul className="relative">
              <li className="relative">
                <NavLink
                  className="link flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-primary transition duration-300 ease-in-out"
                  to="/"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-primary transition duration-300 ease-in-out" key="link1">
                <NavLink to="/motorcycles" className="link hover:text-white">Bikes</NavLink>
              </li>
              {
              user && (
                <>
                  <li className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-primary transition duration-300 ease-in-out" key="link2">
                    <NavLink to="/addmotorcycle" className="link hover:text-white">Add Bike</NavLink>
                  </li>
                  <li className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-primary transition duration-300 ease-in-out" key="link3">
                    <NavLink to="/rentals" className="link hover:text-white">Reservations</NavLink>
                  </li>
                  <li className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-primary transition duration-300 ease-in-out" key="logout_link">
                    <button
                      type="button"
                      onClick={() => handleSignout()}
                      className=""
                    >
                      Logout
                    </button>
                  </li>
                </>
              )
            }
              {
              (user === null) && (
                <>
                  <li className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-primary transition duration-300 ease-in-out" key="signin_link">
                    <NavLink to="/login" className="link hover:text-white">Login</NavLink>
                  </li>
                  <li className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-primary transition duration-300 ease-in-out" key="signup_link">
                    <NavLink to="/signup" className="link hover:text-white">Registration</NavLink>
                  </li>
                </>
              )
            }
            </ul>
          </div>
          <div className="text-center bottom-0 absolute w-full">
            <ul className="relative">
              <li>
                Email: microver@mail.com
              </li>
              <li>
                Call: 123-456-7890
              </li>
            </ul>
            <footer className="py-2 text-sm text-gray-700">
              <p>&#169; 2022 All right Reserved</p>
            </footer>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
