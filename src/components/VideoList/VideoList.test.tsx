import React from 'react';
import VideoList from './VideoList';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });
describe('Video List Suite', () => {

    const state = {
        pageToken: '',
        isAuthenticated: false,
        isLoading: true,
        userEmail: '',
        selectedVideo: '',
        videos: [],
    }
    const handleVideoSelect = (() => { })
    const setState = (() => { })
    it('Video Item Test', () => {
        const component = shallow(<VideoList state={state} handleVideoSelect={handleVideoSelect} setState={setState} />);
        expect(component.find('VideoItem')).toEqual(5);
    });
});