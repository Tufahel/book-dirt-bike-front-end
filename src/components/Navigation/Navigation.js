import React from 'react';
import './Navigation.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/actions/User';

function Navigation() {
  const { user } = useSelector((state) => state.SignoutReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignout() {
    dispatch(signOut(navigate('/')));
  }

  return (
    <>
      <nav className="sidenav">
        <div className="divider">
          <div className="">
            logo
          </div>
          <div className="">
            <div className="">
              <ul className="nav-link">
                <li className="">
                  <NavLink
                    className="link"
                    to="/"
                    exact
                  >
                    Home
                  </NavLink>
                </li>
                <li className="" key="link1">
                  <NavLink to="/motorcycles" className="link">Bikes</NavLink>
                </li>
                {
              user && (
                <>
                  <li className="" key="link2">
                    <NavLink to="/addmotorcycle" className="link">Add Bike</NavLink>
                  </li>
                  <li className="" key="link3">
                    <NavLink to="/rentals" className="link">Reservations</NavLink>
                  </li>
                  <li className="" key="logout_link">
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
                  <li className="" key="signin_link">
                    <NavLink to="/login" className="link">Login</NavLink>
                  </li>
                  <li className="" key="signup_link">
                    <NavLink to="/signup" className="link">Registration</NavLink>
                  </li>
                </>
              )
            }
              </ul>
            </div>
          </div>
          <div className="social">
            <div className="">
              <ul className="">
                <li>
                  Facebook
                </li>
                <li>
                  Email
                </li>
                <li>
                  Call
                </li>
              </ul>
              <footer>
                <p>&#169; 2020 All right Reserved</p>
              </footer>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
