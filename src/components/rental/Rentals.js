import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRentals } from '../../redux/actions/Rental';

function Rentals() {
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
                <img className="rounded w-30 h-20" src="https://img.freepik.com/premium-vector/motorcycle-logo-black-background-modern-racing-superbike-silhouette_304830-257.jpg?w=740" alt="bike" />
                <div>
                  <p className="">
                    <b>Reservation id:</b>
                    {' '}
                    {reservation.id}
                  </p>
                  <p>
                    {' '}
                    <b>User id:</b>
                    {' '}
                    {reservation.user_id}
                  </p>
                  <p>
                    <b>Bike id:</b>
                    {' '}
                    {reservation.motorcycle_id}
                  </p>
                </div>
                <div>
                  {' '}
                  <b>Book date</b>
                  <p>{reservation.book_date}</p>
                  {' '}
                  <b>Return date</b>
                  <p className="">{reservation.return_date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default Rentals;
