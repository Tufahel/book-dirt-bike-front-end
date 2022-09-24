import axios from 'axios';
import { fetchMotorcycleData } from '../../api/Api';

const URL = 'http://localhost:3000/api/motorcycles';

export const GET_MOTORCYCLE = 'GET_MOTORCYCLE';
export const POST_MOTORCYCLE = 'POST_MOTORCYCLE';

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

export const postMotorcycle = (data) => async (dispatch) => {
  // const newMotorcycle = await fetchMotorcycleData(motorcycle);
  // dispatch({
  //   type: POST_MOTORCYCLE,
  //   payload: newMotorcycle,
  // });
  await axios.post(URL, data)
    .then((response) => response.data)
    .then((response) => {
      dispatch({
        type: POST_MOTORCYCLE,
        payload: response,
      });
      dispatch(getMotorcycles());
    });
};
