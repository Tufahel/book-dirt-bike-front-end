import { actionTypes } from '../actions/Motorcycle';

const initialState = {
  bikes: [],
  bike: [],
  loading: false,
  error: null,
};

const MotorcycleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOTORCYCLES_GET_SUCCESS:
      return {
        ...state,
        bikes: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.MOTORCYCLES_GET_FAILURE:
      return {
        ...state,
        bikes: [],
        loading: false,
        error: null,
      };
    case actionTypes.MOTORCYCLE_CREATE_SUCCESS:
      return {
        ...state,
        bikes: [...state.bikes, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.MOTORCYCLE_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.MOTORCYCLE_DELETE_SUCCESS:
      return {
        ...state,
        bikes: state.bikes.filter((bike) => bike.id !== action.payload),
        loading: false,
        error: null,
      };
    case actionTypes.MOTORCYCLE_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default MotorcycleReducer;
