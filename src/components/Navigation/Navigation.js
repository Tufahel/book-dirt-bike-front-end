import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/actions/User';

export default function Navigation() {
  const { user } = useSelector((state) => state.SignoutReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignout() {
    dispatch(signOut(navigate));
  }

  return (
    <>
      <div className="">
        logo
      </div>
      <div className="">
        <div className="">
          <ul className="">
            <li className="" key="link1">
              <NavLink to="/motorcycle" className="">Bikes</NavLink>
            </li>
            {
              user && (
                <>
                  <li className="" key="link2">
                    <NavLink to="/motorcycle" className="">Add Bike</NavLink>
                  </li>
                  <li className="" key="link3">
                    <NavLink to="/rentals" className="">Reservations</NavLink>
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
                    <NavLink to="/login" className="">Login</NavLink>
                  </li>
                  <li className="" key="signup_link">
                    <NavLink to="/signup" className="">Registration</NavLink>
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </div>
      <div className="">
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
    </>
  );
}
