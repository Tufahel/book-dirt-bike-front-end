import { GET_MOTORCYCLE, POST_MOTORCYCLE } from '../actions/Motorcycle';

const MotorcyclesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MOTORCYCLE:
      return { value: action.payload };
    case POST_MOTORCYCLE:
      return { value: [...state.value, action.payload] };
    default:
      return state;
  }
};

export default MotorcyclesReducer;
