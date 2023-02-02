import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import toDoReducer from "./toDoReducer";

const reducer = combineReducers({
    toDoReducer
})

const store = createStore(reducer, composeWithDevTools());

export default store;