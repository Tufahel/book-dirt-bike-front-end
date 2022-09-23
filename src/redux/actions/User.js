import { fetchUserData, postSignupData } from '../../api/Api';

export const actionTypes = {
  GET_USER: 'GET_USER',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',
};

export const getUsers = () => async (dispatch) => {
  const users = await fetchUserData();
  dispatch({
    type: actionTypes.GET_USER,
    payload: users.map((user) => ({
      name: user.username,
      id: user.id,
    })),
  });
};

export const signUp = (userData, location) => async (dispatch) => {
  dispatch({
    type: actionTypes.SIGNUP_REQUEST,
  });
  postSignupData(userData)
    .then((user) => {
      dispatch({
        type: actionTypes.SIGNUP_SUCCESS,
        payload: user,
      });
      location('/login');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.SIGNUP_FAILURE,
        payload: error,
      });
    });
};
