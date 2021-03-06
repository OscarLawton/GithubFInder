import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT
} from '../types';
import Search from '../../components/users/Search';

export default (state, action) => {
    switch(action.type){
        case SEARCH_USERS:
            return{
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}