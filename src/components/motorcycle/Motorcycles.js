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
        <div className="p-4">
          {motorcycles.bikes?.map((motorcycle) => (
            <div key={motorcycle.id} className="grid grid-cols-2 p-4">
              <div className="flex gap-10">
                <img className="rounded-full w-60 h-60" src={motorcycle.image} alt="bike" />
                <div className="">
                  <h2 className="uppercase">{motorcycle.name}</h2>
                  <p className="">
                    Details: &nbsp;
                    {motorcycle.details}
                  </p>
                  <p className="">
                    Rent Price: &nbsp;
                    {motorcycle.price}
                  </p>
                  <div className="flex gap-4">
                    {user && (
                    <button className="delete text-red font-bold py-2 px-4 rounded-full" type="button" onClick={() => handleDelete(motorcycle.bike_id)}>DELETE</button>
                    )}
                    <Motorcycle
                      key={motorcycle.bike_id}
                      id={motorcycle.bike_id}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {
        user && (
          <button
            className="addbike text-white bg-primary font-bold py-4 px-8 rounded-full"
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
