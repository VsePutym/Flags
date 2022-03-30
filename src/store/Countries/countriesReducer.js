import {SET_COUNTRIES, SET_ERROR, SET_STATUS} from "./countriesAction";

const initialState = {
    list: [],
    status: 'none',
    error: null
}

export const countriesReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case SET_COUNTRIES :
            return {
                ...state,
                list: payload,
                status: 'resolve',
                error: null
            }
        case SET_STATUS :
            return {
                ...state,
                status: 'loading',
                error: null
            }
        case SET_ERROR :
            return {
                ...state,
                error: payload,
                status: 'reject'
            }
        default : return state;
    }
}