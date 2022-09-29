import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRentals } from '../../redux/actions/Rental';

function Rentals() {
  const recentImg = localStorage.getItem('recentbikeimg');
  const dispatch = useDispatch();
  const res = useSelector((state) => state.RentalsReducer);
  const reservations = res.rentals;
  useEffect(() => {
    dispatch(getRentals());
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-primary font-bold">Reservations</h1>
        {reservations.rentals?.map((reservation) => (
          <div
            key={reservation.id}
            className="m-4"
          >
            <div key={reservation.id} className="">
              <div className="flex-row gap-4 p-4 card">
                <img className="rounded-full w-60 h-60" src={recentImg} alt="bike" />
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
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default Rentals;
