import { toast } from 'react-toastify';
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
      toast.success('Rental created successfully');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RENTAL_CREATE_FAILURE,
        payload: error,
      });
      toast.error('Unable to create rental, please try again');
    });
};

export const getRentals = () => (dispatch) => {
  fetchRentalsData()
    .then((rentals) => {
      dispatch({
        type: actionTypes.RENTALS_FETCH_SUCCESS,
        payload: rentals,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RENTALS_FETCH_FAILURE,
        payload: error,
      });
    });
};

export const deleteRental = (id) => (dispatch) => {
  deleteRentalseData(id)
    .then(() => {
      dispatch({
        type: actionTypes.RENTAL_DELETE_SUCCESS,
        payload: id,
      });
      toast.success('Rental deleted successfully');
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.RENTAL_DELETE_FAILURE,
        payload: err,
      });
      toast.error('Unable to delete rental, please try again');
    });
};
