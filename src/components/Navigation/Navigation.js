import React, { useState } from 'react';
import './Navigation.css';
import { BiMenu } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions/User';
import bike from '../images/bike.png';

function Navigation() {
  const user = localStorage.getItem('user');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleSignout() {
    dispatch(signOut(navigate('/')));
  }

  const headerClasses = 'z-30 fixed shrink-0 lg:relative flex h-full w-52 flex-col border-r-2 border-gray-100 bg-white py-4 transition lg:translate-x-0';

  return (
    <>
      <header className={headerClasses + (open ? '' : ' -translate-x-52')}>
        <nav className="flex grow flex-col pl-4">
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
                <li className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-primary transition duration-300 ease-in-out" key="link1">
                  <NavLink to="/" className="link hover:text-white">Home</NavLink>
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
            <div className="flex flex-col gap-1 items-center absolute bottom-0">
              <ul className="flex flex-col gap-1 items-center ">
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
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="absolute top-0 p-2 -right-[3.125rem] bg-white/90 lg:hidden hover:text-lime-600"
        >
          <BiMenu className="w-6 h-6" />
        </button>
      </header>
    </>
  );
}

export default Navigation;
