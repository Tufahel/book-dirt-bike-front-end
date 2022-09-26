import { GET_MOTORCYCLE, actionTypes } from '../actions/Motorcycle';

const initialState = {
  bikes: [],
  bike: {},
  loading: false,
  error: null,
};

export const MotorcyclesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MOTORCYCLE:
      return { value: action.payload };
    default:
      return state;
  }
};

export const CreateMotorcycleReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
