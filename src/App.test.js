import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore} from './../utils';
import { isTSAnyKeyword } from '@babel/types';


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
    })
});