import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr, checkProps } from './../../../utils';

// consolidated shallow rendering of the component
const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Component', () => {

    it('should throw a warning', () => {

// testing prop types:
        const expectedProps = {
            header: 'Test Header',
            desc: 'Test Desc',
            tempArr: [{
                fName: 'Test fName',
                lName: 'Test lName',
                email: 'test@email.com',
                age: 24,
                onlineStatus: false
            }]
        };

        // first PropTypes object from component, pass exp props, what we are testing: props, name of component
        const propsErr = checkProps(Headline, expectedProps)
        expect(propsErr).toBeUndefined();
    });


    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        });

        it('should render without errors', () => {
        const component = findByTestAttr(wrapper, "HeadlineComponent");
        expect(component.length).toBe(1);
        });

        it('should render an h1', () => {
            const h1 = findByTestAttr(wrapper, "header");
            expect(h1.length).toBe(1);
        });

        it('should render a paragraph', () => {
            const desc = findByTestAttr(wrapper, "desc");
            expect(desc.length).toBe(1);
        });

    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('should not rendere', () => {
            const component = findByTestAttr(wrapper, "HeadlineComponent");
            expect(component.length).toBe(0);
        });


    });
});