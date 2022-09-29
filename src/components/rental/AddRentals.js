import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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
    navigate('/rentals');
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-screen">
        <section className="">
          <p className="text-center text-4xl text-primary font-bold">Reserve Bike </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8"
          >

            <input
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              placeholder="City"
              type="text"
              name="city"
              value={rental.city}
              onChange={handleChange}
              required
            />
            <br />
            <input
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              placeholder="Book"
              type="date"
              name="book_date"
              value={rental.book_date}
              onChange={handleChange}
              required
            />
            <br />
            <input
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              placeholder="Return"
              type="date"
              name="return_date"
              value={rental.return_date}
              onChange={handleChange}
              required
            />
            <br />
            <button
              className="createbike text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
