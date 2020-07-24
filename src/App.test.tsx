import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });
describe('App Suite', () => {
    it('App Test', () => {
        const component = shallow(<App/>);
        expect(component.find('Login')).toEqual(true);
    });
});