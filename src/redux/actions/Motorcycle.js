import { fetchMotorcycleData } from '../../api/Api';

export const GET_MOTORCYCLE = 'GET_MOTORCYCLE';

export const getMotorcycles = () => async (dispatch) => {
  const motorcycles = await fetchMotorcycleData();
  dispatch({
    type: GET_MOTORCYCLE,
    payload: motorcycles.map((motorcycle) => ({
      name: motorcycle.bike_name,
      id: motorcycle.user_id,
      details: motorcycle.details,
    })),
  });
};
