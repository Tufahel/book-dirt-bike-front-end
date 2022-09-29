import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Motorcycles.css';

const Motorcycle = (props) => {
  const {
    id, image,
  } = props;

  const user = localStorage.getItem('user');

  const setBikeId = (id) => {
    localStorage.setItem('bikeid', id);
    localStorage.setItem('recentbikeid', id);
    localStorage.setItem('recentbikeimg', image);
  };

  return (
    <div className="pt-4 flex flex-col">
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

      {user && (
      <NavLink
        key={id}
        onClick={() => {
          setBikeId(id);
        }}
        to="/addrental"
        className="no-underline text-2xl font-extrabold py-2 px-4 rounded-full text-primary d-link"
      >
        Rent
      </NavLink>
      )}

    </div>
  );
};

Motorcycle.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Motorcycle;
