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
    <div>
      <NavLink
        key={id}
        onClick={() => {
          setBikeId(id);
        }}
        to="/details"
        className="link"
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
