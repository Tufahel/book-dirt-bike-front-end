import axios from 'axios';
import { fetchMotorcycleData } from '../../api/Api';
import { signIn } from './User';

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
  const token = signIn();
  const signInToken = localStorage.getItem('token', token);
  console.log('token: ', signInToken);
  const newMotorcycle = {
    bike_name: data.name,
    details: data.details,
    amount: data.price,
    user_id: data.user_id,
  };
  if (signInToken !== null) {
    axios.post(URL, newMotorcycle, {
      headers: {
        Authorization: `Bearer ${signInToken}`,
      },
    })
      .then((res) => {
        dispatch({
          type: POST_MOTORCYCLE,
          payload: res.data,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  console.log(signInToken);
};
