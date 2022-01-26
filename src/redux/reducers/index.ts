import { combineReducers } from "redux";

import { reducer as todosReducer } from "./slices/todosSlice";
// import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  //   filters: filtersReducer,
});

export default rootReducer;
