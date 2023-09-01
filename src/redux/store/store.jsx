
import { MovieReducer } from "../reducer/reducer";
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
 export const store = createStore(MovieReducer, applyMiddleware(thunk));