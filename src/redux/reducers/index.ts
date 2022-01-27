import { combineReducers } from "redux";

import { reducer as todosReducer } from "./slices/todosSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
