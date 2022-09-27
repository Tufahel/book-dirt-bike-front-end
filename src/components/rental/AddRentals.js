import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createRental } from '../../redux/actions/Rentals';

const AddRental = () => {
  const rentals = useSelector((state) => state.CreateRentalReducer);
  const [rental, setRental] = useState({
    city: '',
    booked: '',
    return: '',
  });

  const handleChange = (e) => {
    setRental({
      ...rental
      [e.target.name] , e.target.value,
    });
  };

  const dispatch = useDispatch(rentals);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRental(rental, navigate('/rental'), e));
  };

  return (
    <>
      <div className="">
        <section className="form-page">
          <p className="text-center" style={{ color: 'rgb(100 116 139)' }}>Add Rental </p>
          <hr />
          <form
            onSubmit={handleSubmit}
            className=""
          >

            <input
              className="input-field"
              placeholder="Price per hour"
              type="number"
              name="amount"
              value={rental.city}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />

            <input
              className="input-field"
              placeholder="image"
              type="text"
              name="image"
              value={rental.booked}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />

            <textarea
              className="input-field"
              placeholder="Details"
              type="text"
              name="details"
              value={rental.return}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />
            <button
              className=""
              type="submit"
            >
              Create Rental
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddRental;
