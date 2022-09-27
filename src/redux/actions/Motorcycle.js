import {
  fetchMotorcyclesData, postNewMotorcycle, deleteMotorcycleData,
} from '../../api/Api';
import { signIn } from './User';

export const actionTypes = {
  MOTORCYCLE_CREATE_SUCCESS: 'MOTORCYCLE_CREATE_SUCCESS',
  MOTORCYCLE_CREATE_FAILURE: 'MOTORCYCLE_CREATE_FAILURE',
  MOTORCYCLE_DELETE_SUCCESS: 'MOTORCYCLE_DELETE_SUCCESS',
  MOTORCYCLE_DELETE_FAILURE: 'MOTORCYCLE_DELETE_FAILURE',
  MOTORCYCLES_GET_SUCCESS: 'MOTORCYCLE_GET_SUCCESS',
  MOTORCYCLES_GET_FAILURE: 'MOTORCYCLE_GET_FAILURE',
};

export const getMotorcycles = () => async (dispatch) => {
  fetchMotorcyclesData()
    .then((motorcycles) => {
      dispatch({
        type: actionTypes.MOTORCYCLES_GET_SUCCESS,
        payload: motorcycles.map((motorcycle) => ({
          name: motorcycle.bike_name,
          id: motorcycle.user_id,
          details: motorcycle.details,
          price: motorcycle.amount,
          image: motorcycle.image,
          bike_id: motorcycle.id,
        })),
      });
      localStorage.setItem('bikes', JSON.stringify(motorcycles));
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.MOTORCYCLES_GET_FAILURE,
        payload: error,
      });
    });
};

export const createMotorcycle = (bike, location) => (dispatch) => {
  const user = signIn();
  const userId = localStorage.getItem('userid', user);
  // console.log('user: ', userId);
  postNewMotorcycle(bike, userId)
    .then((bike) => {
      dispatch({
        type: actionTypes.MOTORCYCLE_CREATE_SUCCESS,
        payload: bike,
      });
      location('/motorcycles');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.MOTORCYCLE_CREATE_FAILURE,
        payload: error,
      });
    });
};

export const deleteMotorcycle = (id) => (dispatch) => {
  deleteMotorcycleData(id)
    .then(() => {
      dispatch({
        type: actionTypes.MOTORCYCLE_DELETE_SUCCESS,
        payload: id,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.MOTORCYCLE_DELETE_FAILURE,
        payload: error,
      });
    });
};
