import { fetchMotorcycleData, postNewMotorcycle } from '../../api/Api';
import { signIn } from './User';

export const actionTypes = {
  MOTORCYCLE_CREATE_SUCCESS: 'MOTORCYCLE_CREATE_SUCCESS',
  MOTORCYCLE_CREATE_FAILURE: 'MOTORCYCLE_CREATE_FAILURE',
};

export const GET_MOTORCYCLE = 'GET_MOTORCYCLE';

export const getMotorcycles = () => async (dispatch) => {
  const motorcycles = await fetchMotorcycleData();
  dispatch({
    type: GET_MOTORCYCLE,
    payload: motorcycles.map((motorcycle) => ({
      name: motorcycle.bike_name,
      id: motorcycle.user_id,
      details: motorcycle.details,
      price: motorcycle.amount,
    })),
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
      location('/motorcycle');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.MOTORCYCLE_CREATE_FAILURE,
        payload: error,
      });
    });
};
