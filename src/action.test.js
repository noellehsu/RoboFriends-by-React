import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as actions from './action';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it ('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction);

})

it('handle requesting robots API', () => {
const store = new mockStore();
store.dispatch(actions.requestRobots());
const action = store.getAction();
console.log('action',action)

    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
    }    

    //npm install --save-dev redux-mock-store
expect(action[0]).toEqual(expectedAction);
})