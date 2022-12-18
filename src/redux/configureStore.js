import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RentalsReducer from './reducers/Rental';
import {
  UsersReducer, SignupReducer, SigninReducer, SignoutReducer,
} from './reducers/User';
import MotorcycleReducer from './reducers/Motorcycle';

const rootReducer = combineReducers({
  SignupReducer,
  SigninReducer,
  SignoutReducer,
  UsersReducer,
  RentalsReducer,
  MotorcycleReducer,
});
const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger)));

export default store;
