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
      <div className="bike">
        {motorcycles.bikes?.map((motorcycle) => (
          <button
            key={motorcycle.id}
            type="button"
            className="bike__button"
          >
            <div key={motorcycle.id} className="bike__container">
              <div className="bike__image">
                <img className="imagebike" src={motorcycle.image} alt="bike" />
              </div>
              <div className="bike__details">
                <h3>{motorcycle.name}</h3>
                <p>{motorcycle.details}</p>
                <p>{motorcycle.price}</p>
                {user && (
                  <button type="button" onClick={() => handleDelete(motorcycle.bike_id)}>DELETE</button>
                )}
                <>
                  <Motorcycle
                    key={motorcycle.bike_id}
                    id={motorcycle.bike_id}
                  />
                </>
              </div>
            </div>
          </button>
        ))}

        {
        user && (
          <button
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
