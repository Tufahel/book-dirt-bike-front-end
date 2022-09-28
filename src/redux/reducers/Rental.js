import { actionTypes } from '../actions/Rental';

const initialState = {
  rentals: [],
  rental: {},
  loading: false,
  error: null,
};

const RentalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RENTALS_FETCH_SUCCESS:
      return {
        ...state,
        rentals: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.RENTALS_FETCH_FAILURE:
      return {
        ...state,
        rentals: [],
        loading: false,
        error: action.payload,
      };

    case actionTypes.RENTAL_CREATE_SUCCESS:
      return {
        ...state,
        rentals: [...state.rentals, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.RENTAL_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.RENTAL_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case actionTypes.RENTAL_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default RentalsReducer;
