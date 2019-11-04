import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../src/reducers';
import { middlewares } from './../src/createStore';


// (2) consolidate find()-methods for each test attribute
export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

// integration test: mock response from API,
// action creator to dispatch the action,
// store getting updated correctly (use testStore)
export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState);
};