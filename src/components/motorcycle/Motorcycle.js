import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMotorcycle } from '../../redux/actions/Motorcycle';

const Motorcycle = (props) => {
  const {
    id,
  } = props;
  const dispatch = useDispatch();

  const handleGet = (id) => {
    dispatch(getMotorcycle(id));
    window.location.reload(false);
  };

  return (
    <div>
      <button
        key={id}
        type="button"
        className="btn"
        onClick={() => {
          handleGet(id);
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
