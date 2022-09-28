import {
  fetchRentalsData, addNewRental, deleteRentalseData,
} from '../../api/Api';

export const actionTypes = {
  RENTALS_FETCH_SUCCESS: 'RENTALS_FETCH_SUCCESS',
  RENTALS_FETCH_FAILURE: 'RENTALS_FETCH_FAILURE',
  RENTAL_FETCH_SUCCESS: 'RENTAL_FETCH_SUCCESS',
  RENTAL_FETCH_FAILURE: 'RENTAL_FETCH_FAILURE',
  RENTAL_CREATE_SUCCESS: 'RENTAL_CREATE_SUCCESS',
  RENTAL_CREATE_FAILURE: 'RENTAL_CREATE_FAILURE',
  RENTAL_DELETE_SUCCESS: 'RENTAL_DELETE_SUCCESS',
  RENTAL_DELETE_FAILURE: 'RENTAL_DELETE_FAILURE',
};

export const createRental = (rental, userId, bikeId) => (dispatch) => {
  addNewRental(rental, userId, bikeId)
    .then((rental) => {
      dispatch({
        type: actionTypes.RENTAL_CREATE_SUCCESS,
        payload: rental,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RENTAL_CREATE_FAILURE,
        payload: error,
      });
    });
};

export const getRentals = () => (dispatch) => {
  fetchRentalsData()
    .then((rentals) => {
      dispatch({
        type: actionTypes.RENTALS_FETCH_SUCCESS,
        payload: rentals,
      });
      localStorage.setItem('rentals', JSON.stringify(rentals));
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RENTALS_FETCH_FAILURE,
        payload: error,
      });
    });
};

// export const getRentals = () => (dispatch) => {
//   dispatch({
//     type: actionTypes.RENTALS_FETCH_REQUEST,
//   });
//   fetchRentalsData()
//     .then((rentals) => {
//       dispatch({
//         type: actionTypes.RENTALS_FETCH_SUCCESS,
//         payload: rentals.data,
//       });
//     })
//     .catch((error) => {
//       dispatch({
//         type: actionTypes.RENTALS_FETCH_FAILURE,
//         payload: error,
//       });
//     });
// };

export const deleteRental = (id) => (dispatch) => {
  deleteRentalseData(id)
    .then(() => {
      dispatch({
        type: actionTypes.RENTAL_DELETE_SUCCESS,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.RENTAL_DELETE_FAILURE,
        payload: err,
      });
    });
};
