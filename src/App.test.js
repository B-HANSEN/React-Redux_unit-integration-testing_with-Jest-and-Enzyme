import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../utils';


const setUp = (initialState={}) => {
    const store = testStore(initialState);

    // to access child component from Provider, add the childAt(0)-method:
    // use dive()-method to render contents of the component:
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    // console.log(wrapper.debug());
    return wrapper;
}

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title 1',
                body: 'Some text'
            },{
                title: 'Example title 2',
                body: 'Some text'
            },{
                title: 'Example title 3',
                body: 'Some text'
            }]
        }
        wrapper = setUp(initialState);
    });

    it('should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent')
        expect(component.length).toBe(1);
    });


// always 2 scenarios to test methods:
// (1) updates the state
// (2) returns a value or a new piece of state

    it('exampleMethod_updateState Method should update state as expected', () => {
// create instance of the class:
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updateState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    });

    it('exampleMethod_returnsAValue should return value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(6);
        expect(newValue).toBe(7);
    });
});