import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Motorcycles.css';

const Motorcycle = (props) => {
  const {
    id,
  } = props;

  const setBikeId = (id) => {
    localStorage.setItem('bikeid', id);
  };

  return (
    <div className="pt-4">
      <NavLink
        key={id}
        onClick={() => {
          setBikeId(id);
        }}
        to="/details"
        className="no-underline text-2xl font-extrabold py-2 px-4 rounded-full text-primary d-link"
      >
        Details
      </NavLink>

    </div>
  );
};

Motorcycle.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Motorcycle;
