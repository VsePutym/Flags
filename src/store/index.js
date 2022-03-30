import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from "./root-reducer";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from '../config'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({client: axios,
api}), logger)));

export {store}