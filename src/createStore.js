import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

// create and export middlewares separately
// to use for both the real and the test store:
export const middlewares = [ReduxThunk];

// use spread operator as middlewares is an array
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(RootReducer);



// With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action.
// Middleware extend the store's abilities, and let you write async logic that interacts with the store.

// Thunks are the recommended middleware for basic Redux side effects logic,
// including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.