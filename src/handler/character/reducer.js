import {
    LIST_CHARACTER_PENDING,
    LIST_CHARACTER_SUCCESS,
    LIST_CHARACTER_FAILURE
} from './actionTypes';


const INITIAL_STATE = { 
    list: null, 
    page: "page=1",
    loading: false 
}


function characterReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case LIST_CHARACTER_SUCCESS:
            return {
                ...state,
                loading: false,
                page: action.page,
                list: action.list,
            }
        case LIST_CHARACTER_PENDING:
            return {
                ...state,
                loading: true,
            }
        case LIST_CHARACTER_FAILURE:
            return {
                ...state,
                list: null,
                page: null,
                loading: false
            }
        default:
            return state
    }
}

export { characterReducer };