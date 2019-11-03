import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

// create and export middlewares separately
// to use for both the real and the test store:
export const middlewares = [ReduxThunk];

// use spread operator as middlewares is an array
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(RootReducer);