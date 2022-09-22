import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/User';

export default function User() {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);
  const users = useSelector((state) => state.UsersReducer);

  const handleClick = () => {
    dispatch(getUsers());
    setIsShown(true);
  };
  return (
    <>
      <button
        key={1}
        type="submit"
        onClick={handleClick}
      >
        new user
      </button>
      {isShown && (
        <div>
          <p>User : </p>
          <h3>
            {users.value}
          </h3>
        </div>
      )}
    </>
  );
}
