import React from 'react';
import VideoItem from './VideoItem';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('My Test Suite', () => {

    const key = "7T91vrI8hGA";
    const  video={  url: "https://i.ytimg.com/vi/jd8YQ8pu908/mqdefault.jpg",
    width: 320,
    height: 180}
    const  handleVideoSelect= (() => {})
    it('Video Item Test', () => {
        const component = shallow(<VideoItem key={key} video={video}
            handleVideoSelect={handleVideoSelect}/>);
            expect(component.text()).toEqual('Off');

            component.find('input').simulate('change');
          
            expect(component.text()).toEqual('On');
    });
  });