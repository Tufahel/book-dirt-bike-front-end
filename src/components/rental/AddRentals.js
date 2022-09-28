import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRental } from '../../redux/actions/Rental';

const AddRental = () => {
  const bikeId = parseInt(localStorage.getItem('bikeid'), 10);
  const userId = parseInt(localStorage.getItem('userid'), 10);
  const rentals = useSelector((state) => state.RentalsReducer);
  const [rental, setRental] = useState({
    city: '',
    book_date: '',
    return_date: '',
  });

  const handleChange = (e) => {
    setRental({
      ...rental,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch(rentals);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRental(rental, userId, bikeId));
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
              onChange={handleChange}
              required
            />

            <input
              className="input-field"
              placeholder="Book"
              type="date"
              name="book_date"
              value={rental.book_date}
              onChange={handleChange}
              required
            />

            <input
              className="input-field"
              placeholder="Return"
              type="date"
              name="return_date"
              value={rental.return_date}
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
