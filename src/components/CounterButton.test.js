import React from 'react';
import CounterButton from './CounterButton';
// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

it('expect to render CounterButton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();

})

it('correctly increment the counter', () => {
    const mockColor = 'red';

    //shallow另一種寫法
    const wrapper = shallow(<CounterButton color={mockColor} />)

    //模擬click事件，按兩下
    //state()取得state
    wrapper.find('#counter').simulate('click')
    wrapper.find('#counter').simulate('click')
    expect(wrapper.state()).toEqual({ count: 2 });
    wrapper.find('#counter').simulate('click')
    expect(wrapper.state()).toEqual({ count: 3 });

    expect(wrapper.props().color).toEqual('red');
})

