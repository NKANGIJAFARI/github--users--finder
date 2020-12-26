import {
    SEARCH_USERS,
    GET_REPOS  ,
    GET_USER,
    SET_LOADING,
    SET_ALERT,
    CLEAR_USERS,
} from '../types';

export default (state, action) =>{
    switch(action.type){
        case SEARCH_USERS:
            return {
                ...state, 
                users: action.payload, 
                loading:false
            }
        case SET_LOADING:
            return {...state, loading: true}
        case SET_ALERT:
            return {
                ...state,
                alert:action.payload }
        case CLEAR_USERS:
            return {...state, users: []}
        case GET_REPOS: return{
            ...state, 
            repos: action.payload
        }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        default: return{state}
    }
}