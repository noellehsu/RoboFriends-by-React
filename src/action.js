
import {
        CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAILED
} from './constants';

//Actions are just objects
export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIELD,
        payload: text
})

//setSearchField是一般的action，下面這個是有加入thunk的action
//回傳dispatch方法(thunkMiddleware會去監聽有哪個action是回傳function)
export const requestRobots = () => (dispatch) => {
        dispatch({ type: REQUEST_ROBOTS_PENDING });
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload:data}))
        .catch(error => dispatch({type:REQUEST_ROBOTS_FAILED, payload:error}))
}