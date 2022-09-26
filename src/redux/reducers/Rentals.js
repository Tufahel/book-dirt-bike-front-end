import { GET_RENTALS, actionTypes } from '../actions/Rentals';

const initialState = {
  rents: [],
  rent: {},
  loading: false,
  error: null,
};

const RentalsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RENTALS:
      return { value: action.payload };
    default:
      return state;
  }
};

export default RentalsReducer;

export const CreateRentalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RENTAL_CREATE_SUCCESS:
      return {
        ...state,
        rents: [...state.rents, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.RENTAL_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
