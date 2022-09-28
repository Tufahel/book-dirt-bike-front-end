import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Motorcycles.css';
import { getMotorcycles, deleteMotorcycle } from '../../redux/actions/Motorcycle';
import Navigation from '../Navigation/Navigation';
import Motorcycle from './Motorcycle';

function Motorcycles() {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.MotorcycleReducer);
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  useEffect(() => {
    dispatch(getMotorcycles());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteMotorcycle(id));
  };

  return (
    <>
      <Navigation />
      <div className="h-screen flex flex-col items-center justify-center bg-gray-200 p-5 ml-64">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="flex flex-col justify-center items-center w-full text-4xl font-bold">Welcome to Dirty Bikes</h1>
            <p className="flex flex-col justify-center items-center w-full text-2xl">We are the best bike rental company in the world</p>
          </div>
        </div>
        {motorcycles.bikes?.map((motorcycle) => (
          <div key={motorcycle.id} className="bike__container">
            <div className="bike__details">
              <img className="imagebike" src={motorcycle.image} alt="bike" />
              <div className="desc">
                <h2>{motorcycle.name}</h2>
                <p>{motorcycle.details}</p>
                <p>{motorcycle.price}</p>
                {user && (
                <button className="delete" type="button" onClick={() => handleDelete(motorcycle.bike_id)}>DELETE</button>
                )}
                <>
                  <Motorcycle
                    className="details"
                    key={motorcycle.bike_id}
                    id={motorcycle.bike_id}
                  />
                </>
              </div>
            </div>
          </div>
        ))}

        {
        user && (
          <button
            className="addbike"
            type="button"
            onClick={() => navigate('/addmotorcycle')}
          >
            Add Bike
          </button>
        )

      }
      </div>

    </>
  );
}

export default Motorcycles;
