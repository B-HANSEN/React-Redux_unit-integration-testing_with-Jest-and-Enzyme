import React from 'react';
import  { findByTestAttr, checkProps } from './../../../utils';
import SharedButton from './index';
import { shallow } from 'enzyme';

describe('SharedButton Component', () => {

    describe('Checking PropTypes', () => {
        it('should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',

// test passing a string before passing a function:
                emitEvent: () => {
                    
                }
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
         });
    });


    describe('renders without errors', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
// simulate events in a test:
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
                
            };
            wrapper = shallow(<SharedButton {...props} />)
        });

        it('should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

// simulate events in a test:
        it('should emit callback on click event', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })
    });
});