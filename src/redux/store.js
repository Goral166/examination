import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducers, exampaperReducers } from "./reducers";

const rootReducer = combineReducers({ authReducers, exampaperReducers });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
