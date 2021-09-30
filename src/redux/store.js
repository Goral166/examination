import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  authReducers,
  exampaperReducers,
  viewExamReducers,
  examDetailsReducers,
  allStudentReducers,
  viewStudentReducers,
  studentExamReducers,
} from "./reducers";

const rootReducer = combineReducers({
  authReducers,
  exampaperReducers,
  viewExamReducers,
  examDetailsReducers,
  allStudentReducers,
  viewStudentReducers,
  studentExamReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
