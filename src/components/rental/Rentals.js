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
      <div className="bike">
        {reservations.rentals?.map((reservation) => (
          <button
            key={reservation.id}
            type="button"
            className=""
          >
            <div key={reservation.id} className="">
              <div className="">
                reservation id
                <h3>{reservation.id}</h3>
                {' '}
                user id
                <h3>{reservation.user_id}</h3>
                {' '}
                bike id
                <h2>{reservation.motorcycle_id}</h2>
                {' '}
                book date
                <p>{reservation.book_date}</p>
                {' '}
                return date
                <p>{reservation.return_date}</p>
                <button type="button" onClick={() => handleDelete(reservation.id)}>DELETE</button>
                {/* <>
                  <reservation
                    key={reservation.bike_id}
                    id={reservation.bike_id}
                  />
                </> */}
              </div>
            </div>
          </button>
        ))}

        {/* {
        user && (
          <button
            type="button"
            onClick={() => navigate('/addreservation')}
          >
            Add Bike
          </button>
        )

      } */}
      </div>

    </>
  );
}

export default Rentals;
