import { GET_USER } from '../actions/User';

const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default UsersReducer;
