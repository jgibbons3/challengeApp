import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import { Login } from '../components/Login/Login';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe("ControlledForm", () => {
    it("Button should have text submit", () => {
        const wrapper = shallow(<Login />);
        const button = wrapper.find('button');

        expect(button.text()).toBe('Submit')
    });

    it("testing submit is prevented and dispatch is call", () => {
        const props = { dispatch: jest.fn() }
        const wrapper = shallow(<Login {...props} />);
        const form = wrapper.find('form');
        const preventDefault = jest.fn()
        form.simulate('submit', { preventDefault });

        expect(props.dispatch.mock.calls.length).toBe(1)
        expect(preventDefault.mock.calls.length).toBe(1)
    });
});