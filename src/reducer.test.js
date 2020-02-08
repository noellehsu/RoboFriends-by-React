import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducer';

describe('searchRobots', () => {
    it('should return the initial state', () => {
        //state跟action兩個參數如果沒東西
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEARCH_FIELD', () => {
        const initialStateSearch = {
            searchField: ''
        }

        //state跟action兩個參數如果沒東西
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' })
    })

})

describe('requestRobots', () => {
    const initialStateRequest = {
        isPending: false,
        robots: [],
    }
    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRequest)
    })


    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRequest, {
            type: REQUEST_ROBOTS_PENDING,
        })).toEqual({ 
            robots:[],
            isPending: true 
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRequest, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload:[{
                id:'123',
                name:'test',
                email:'test@gmail.com'
            }]
        })).toEqual({ 
            robots: [{
                id:'123',
                name:'test',
                email:'test@gmail.com'
            }], 
            isPending: false
        })
    })


    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRequest, {
            type: REQUEST_ROBOTS_FAILED,
            payload:'NOOOOO'
        })).toEqual({ 
            error: 'NOOOOO', 
            robots:[],
            isPending: false
        })
    })

})


