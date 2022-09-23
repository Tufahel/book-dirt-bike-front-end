import { GET_MOTORCYCLE } from '../actions/Motorcycle';

const MotorcyclesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MOTORCYCLE:
      return { value: action.payload };
    default:
      return state;
  }
};

export default MotorcyclesReducer;
