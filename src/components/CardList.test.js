import React from 'react';
import CardList from './CardList';
// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';

// setup file
import {configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter:new Adapter() })

it('expect to render CardList component', () => {
    //CardList跟Card不一樣，裡面沒有robots，要自己產
    const mockRobots = [
        {
            id:1,
            name:'John Snow',
            username:'John123',
            email:'john@gmail.com'

        } 
    ]


    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();

})

