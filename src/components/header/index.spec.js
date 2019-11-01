import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from './../../../utils'; 
import Header from './index';

// additional config in case config in setupTest.js not sufficient
configure({ adapter: new Adapter()} );

// in case of several tests for a component
// (1) consolidate shallow rendering of the component
const setUp = (props= {}) => {
    const component = shallow(<Header { ...props } />);
    return component;
};

// (2) consolidate find()-methods for each test attribute
// import from utils to enable functions sharing to other test files


describe('Header Component', () => {

// standardised shallow-rendering of component
    let component;
    beforeEach( ()=> {
        component = setUp();
    })

    it('Should render without errors', () => {
        // (1) const component = shallow(<Header />)
        // (2) const wrapper = component.find(`[data-test='headerComponent']`);
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render without errors', () => {
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });
});