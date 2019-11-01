import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './index';

// additional config in case config in setupTest.js not sufficient
configure({ adapter: new Adapter()} );

// in case of several test for a component
// consolidate shallow rendering of the component
const setUp = (props= {}) => {
    const component = shallow(<Header { ...props } />);
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach( ()=> {
        component = setUp();
    })

    it('Should render without errors', () => {
        // const component = shallow(<Header />)
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render without errors', () => {
        // const component = shallow(<Header />)
        const logo = component.find('.logoIMG');
        expect(logo.length).toBe(1);
    });
});