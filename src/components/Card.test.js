import React from 'react';
import Card from './Card';
// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';

// setup file
import {configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter:new Adapter() })

it('expect to render Card component', () => {
    // expect(shallow(<Card />).length).toEqual(1);

    //使用snapshot測試，產生snapshot檔
    expect(shallow(<Card />)).toMatchSnapshot();

})

