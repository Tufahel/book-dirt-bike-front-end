import { fetchRentalsData,addNewRental } from '../../api/Api';
import { signIn } from './User';

export const GET_RENTALS = 'GET_RENTALS';

export const actionTypes = {
  RENTAL_CREATE_SUCCESS: 'RENTAL_CREATE_SUCCESS',
  ENTAL_CREATE_FAILURE: 'RENTAL_CREATE_FAILURE',
  RENTAL_DELETE_SUCCESS: 'RENTAL_DELETE_SUCCESS',
 RENTAL_DELETE_FAILURE: 'RENTAL_DELETE_FAILURE',
};

export const getRentals = () => async (dispatch) => {
  const rentals = await fetchRentalsData();
  dispatch({
    type: GET_RENTALS,
    payload: rentals.map((rental) => ({

      id: rental.user_id,
      bike: rental.motorcycle_id,
      city: rental.city,
      booked: rental.book_date,
      return: rental.return_date,
    })),
  });
};

export const createRental = (bike, location) => (dispatch) => {
  const user = signIn();
  const userId = localStorage.getItem('userid', user);
  // console.log('user: ', userId);
  addNewRental(bike, userId)
    .then((bike) => {
      dispatch({
        type: actionTypes.RENTAL_CREATE_SUCCESS,
        payload: bike,
      });
      location('/rental');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RENTAL_CREATE_FAILURE,
        payload: error,
      });
    });
};
