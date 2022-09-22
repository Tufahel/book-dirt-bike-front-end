import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMotorcycles } from '../redux/actions/Motorcycle';

export default function Motorcycle() {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.MotorcyclesReducer);
  console.log(motorcycles);
  dispatch(getMotorcycles(), []);

  return (
    <>
      {motorcycles.value.map((motorcycle) => (
        <p key={motorcycle.id}>
          bike type
          {motorcycle.name}
          {' '}
          and
          {motorcycle.details}
          .
        </p>
      ))}

    </>
  );
}
