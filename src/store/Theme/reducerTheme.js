import {TOGGLE_THEME} from "./actionTheme";

const initialState = 'light'

export const reducerTheme = (state = initialState, {type, payload}) => {
    switch (type){
        case TOGGLE_THEME : {
            return payload
        }
        default : {
            return state
        }
    }
 }
