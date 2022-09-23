import { actionTypes } from '../actions/User';

const user = localStorage.getItem('user');
const initialState = user
  ? {
    user,
    errorSignup: null,
    loadingSignup: false,
  }
  : {
    user: null,
    error_sign_up: null,
    loadingSignin: false,
  };

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return { value: action.payload };
    default:
      return state;
  }
};

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loadingSignup: false,
        errorSignup: null,
      };
    case actionTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        loadingSignup: true,
        errorSignup: null,
      };
    case actionTypes.USER_REGISTER_FAILURE:
      return {
        ...state,
        user: null,
        loadingSignup: false,
        errorSignup: action.payload,
      };
    default:
      return state;
  }
};

export default UsersReducer;
