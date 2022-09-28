import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRentals, deleteRental } from '../../redux/actions/Rental';
import Navigation from '../Navigation/Navigation';

function Rentals() {
  // const bikeId = parseInt(localStorage.getItem('bikeid'), 10);
  // const userId = parseInt(localStorage.getItem('userid'), 10);
  const dispatch = useDispatch();
  // const reservations = JSON.parse(localStorage.getItem('rentals'));
  const res = useSelector((state) => state.RentalsReducer);
  const reservations = res.rentals;
  console.log('hello');
  // console.log('filtered', filtered1);
  // console.log('filtered2', filtered2);
  console.log('reserve', reservations.rentals);
  useEffect(() => {
    dispatch(getRentals());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteRental(id));
  };

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-primary font-bold">Reservations</h1>
        {reservations.rentals?.map((reservation) => (
          <div
            key={reservation.id}
            className="m-4"
          >
            <div key={reservation.id} className="">
              <div className="flex gap-4 p-4">
                <b>Reservation id</b>
                <p className="">{reservation.id}</p>
                {' '}
                <b>User id</b>
                <p>{reservation.user_id}</p>
                {' '}
                <b>Bike id</b>
                <p>{reservation.motorcycle_id}</p>
                {' '}
                <b>Book date</b>
                <p>{reservation.book_date}</p>
                {' '}
                <b>Return date</b>
                <p className="">{reservation.return_date}</p>
                <button className="delete text-red font-bold py-2 px-4 rounded-full" type="button" onClick={() => handleDelete(reservation.id)}>Remove Reservation</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default Rentals;
