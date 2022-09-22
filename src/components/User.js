import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/User';

export default function User(props) {
  const {
    id, name,
  } = props;
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);

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
            {id}
          </h3>
          <p>name : </p>
          <h3>
            {name}
          </h3>
        </div>
      )}
    </>
  );
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
