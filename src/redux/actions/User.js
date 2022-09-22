import { fetchUserData } from '../../api/Api';

export const GET_USER = 'GET_USER';

export const getUsers = () => async (dispatch) => {
  const users = await fetchUserData();
  dispatch({
    type: GET_USER,
    payload: users.map((user) => ({
      name: user.username,
      id: user.id,
    })),
  });
};
