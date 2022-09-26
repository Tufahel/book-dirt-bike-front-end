import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMotorcycles } from '../../redux/actions/Motorcycle';
// import AddMotorcycle from './AddMotorcycle';

export default function Motorcycle() {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.MotorcyclesReducer);
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  // console.log(motorcycles);
  // dispatch(getMotorcycles(), []);
  useEffect(() => {
    dispatch(getMotorcycles());
  }, []);

  return (
    <>
      {motorcycles.value?.map((motorcycle) => (
        <p key={motorcycle.id}>
          bike type: &nbsp;
          {motorcycle.name}
          {' '}
          and &nbsp;
          {motorcycle.details}
          is available for rent at &nbsp;
          {motorcycle.price}
          .
        </p>
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

    </>
  );
}
