
import { CHANGE_SEARCH_FIELD } from './constants';

// 初始化state，避免最開始取得的state是undefined
const initialState = {
    searchField: ''

}

//searchRobots是我第一個Reducer
export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}