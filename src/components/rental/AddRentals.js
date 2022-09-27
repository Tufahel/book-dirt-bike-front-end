import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createRental } from '../../redux/actions/Rentals';

const AddRental = () => {
  const bikeId = localStorage.getItem('bikeid');
  const rentals = useSelector((state) => state.CreateRentalReducer);
  const [rental, setRental] = useState({
    city: '',
    booked: '',
    return: '',
    bikeId,
  });

  const handleChange = (e) => {
    setRental({
      ...rental,
      [e.target.name]: e.target.value,
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
              placeholder="City"
              type="text"
              name="city"
              value={rental.city}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />

            <input
              className="input-field"
              placeholder="Booked"
              type="date"
              name="rented"
              value={rental.booked}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />

            <input
              className="input-field"
              placeholder="Return"
              type="date"
              name="returned"
              value={rental.return}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />
            <button
              className=""
              type="submit"
              onClick={handleSubmit}
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
