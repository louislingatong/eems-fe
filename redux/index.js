import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = [applyMiddleware(thunk)];

const initialState = {};

export const initStore = () => {
    return createStore(rootReducer, initialState, compose(...enhancers));
};
