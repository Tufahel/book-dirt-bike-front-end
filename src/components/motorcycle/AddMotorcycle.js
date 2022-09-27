import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createMotorcycle } from '../../redux/actions/Motorcycle';
import Navigation from '../Navigation/Navigation';
import './Motorcycle.css';

const AddMotorcycle = () => {
  const motorcycles = useSelector((state) => state.CreateMotorcyclereducer);
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
    dispatch(createMotorcycle(motorcycle, navigate('/motorcycle'), e));
  };

  return (
    <>
      <Navigation />
      <div className="form-section">
        <section className="">
          <p className="text-center" style={{ color: 'rgb(100 116 139)' }}>Add Bike </p>
          <hr />
          <form
            onSubmit={handleSubmit}
            className="form-page"
          >
            <input
              className="input-field"
              placeholder="Bike Name"
              type="text"
              name="bike_name"
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              value={motorcycle.bike_name}
              required
            />

            <input
              className="input-field"
              placeholder="Price per hour"
              type="number"
              name="amount"
              value={motorcycle.amount}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />

            <input
              className="input-field"
              placeholder="image"
              type="url"
              name="image"
              value={motorcycle.image}
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
              value={motorcycle.details}
              minLength="1"
              maxLength="100"
              onChange={handleChange}
              required
            />
            <button
              className=""
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
