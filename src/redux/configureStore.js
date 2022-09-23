import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import UsersReducer from './reducers/User';
import MotorcyclesReducer from './reducers/Motorcycle';

const rootReducer = combineReducers({ UsersReducer, MotorcyclesReducer });
const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger)));

export default store;
