import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Motorcycle = (props) => {
  const {
    id,
  } = props;

  const setBikeId = (id) => {
    localStorage.setItem('bikeid', id);
  };

  return (
    <div>
      <button
        key={id}
        type="button"
        className="btn"
        onClick={() => {
          setBikeId(id);
        }}
      >
        <NavLink to="/details" className="">
          Details
        </NavLink>
      </button>

    </div>
  );
};

Motorcycle.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Motorcycle;
