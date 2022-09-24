import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRentals } from '../redux/actions/Rentals';

export default function Rental() {
  const dispatch = useDispatch();
  const rentals = useSelector((state) => state.RentalsReducer);

  useEffect(() => {
    dispatch(getRentals());
  }, []);

  return (
    <>
      {rentals.value?.map((rental) => (
        <p key={rental.id}>
          bike type: &nbsp;
          {rental.bike}
          {' '}
          and will be booked on &nbsp;
          {rental.booked}
          {', '}
          will be returned on &nbsp;
          {rental.return}
          .
        </p>
      ))}

    </>
  );
}
