import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../utils';
import ListItem from './index';

describe('ListItem Component', () => {

    describe('checking PopTypes', () => {

        it('should NOT throw a warning', () => {
            const expectedProps = {

// test passing a number before passing a string:
                title: 'Example Title',
                desc: 'Some Text'
            };
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('component renders', () => {

        let wrapper;
        beforeEach(()=> {
            const props = {
                title: 'Example Title',
                desc: 'Some text'
            };
            wrapper = shallow(<ListItem {...props} /> );
        });

// write all test first to let them fail
// then setup data-test classes in component to let them pass

        it('should render without error', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('should render a title', () => {
            const title  = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });
    });


// if(!title), do not render:
    describe('should NOT render', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Some text'
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it('component is not rendered', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        });
    });
});