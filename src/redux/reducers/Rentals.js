import { GET_RENTALS } from '../actions/Rentals';

const RentalsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RENTALS:
      return { value: action.payload };
    default:
      return state;
  }
};

export default RentalsReducer;
