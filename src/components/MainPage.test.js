import React from 'react';
import MainPage from './MainPage';
// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

// it('expect to render MainPage component', () => {
//     const mockStore = {
//         robot:[],
//         searchField:''
//     };
//     expect(shallow(<MainPage store={mockStore}/>)).toMatchSnapshot();

// })

let wrapper;
beforeEach(() => {
    // 在所有測試前都要先跑過這邊
    const mockProps = {
        onRequestRobots: jest.fn(),
        robot: [],
        searchField: '',
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps} />)
})


it('render MainPage', () => {
    expect(wrapper).toMatchSnapshot();
})


it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robot: [{
            id:3,
            name:'John',
            eami:'jo@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)

    expect(wrapper2.instance().filterRobots([])).toEqual([{
        id:3,
        name:'John',
        eami:'jo@gmail.com'
    }])

})

it('filters robots correctly again', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robot: [{
            id:3,
            name:'John',
            eami:'jo@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }

    
    const wrapper3 = shallow(<MainPage {...mockProps3} />)

    expect(wrapper3.instance().filterRobots([])).toEqual([{
        id:3,
        name:'John',
        eami:'jo@gmail.com'
    }])

})


