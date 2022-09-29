import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createMotorcycle } from '../../redux/actions/Motorcycle';
import './Motorcycles.css';

const AddMotorcycle = () => {
  const motorcycles = useSelector((state) => state.MotorcycleReducer);
  const [motorcycle, setMotorcycle] = useState({
    bike_name: '',
    details: '',
    amount: '',
    image: '',
  });

  const handleChange = (e) => {
    setMotorcycle({
      ...motorcycle,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch(motorcycles);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMotorcycle(motorcycle, navigate('/'), e));
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-screen">
        <section className="">
          <p className="text-center text-4xl text-primary font-bold">Add Bike </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8"
          >
            <input
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              placeholder="Bike Name"
              type="text"
              name="bike_name"
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              value={motorcycle.bike_name}
              required
            />
            <br />
            <input
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              placeholder="Price per hour in $"
              type="number"
              name="amount"
              value={motorcycle.amount}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />
            <br />
            <input
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              placeholder="image"
              type="url"
              name="image"
              accept="image/*"
              value={motorcycle.image}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />
            <br />
            <textarea
              className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              placeholder="Details"
              type="text"
              name="details"
              value={motorcycle.details}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />
            <br />
            <button
              className="createbike text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Bike
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddMotorcycle;
