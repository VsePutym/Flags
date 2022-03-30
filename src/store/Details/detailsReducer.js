import {SET_CLEAR_DETAILS, SET_DETAILS_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBORS} from "./detailsAction";

const initialState = {
    currentCountry: null,
    status: 'none',
    error: null,
    neighbors: []
}
export const detailsReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case SET_LOADING :
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
        case SET_DETAILS_COUNTRY :
            return {
                ...state,
                error: null,
                currentCountry: payload,
                status: 'resolve'
            }
        case SET_CLEAR_DETAILS:
            return initialState
        case SET_NEIGHBORS:
            return {
                ...state,
                neighbors: payload
            }
        default : return state
    }
}