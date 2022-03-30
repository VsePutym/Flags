import {combineReducers} from "redux";
import {reducerTheme} from "./Theme/reducerTheme";
import {controlsReducer} from "./Controls/controlsReducer";
import {detailsReducer} from "./Details/detailsReducer";
import {countriesReducer} from "./Countries/countriesReducer";

export const rootReducer = combineReducers({
    countries: countriesReducer,
    theme: reducerTheme,
    controls: controlsReducer,
    details: detailsReducer
})