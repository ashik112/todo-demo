import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppThunk } from "../../store";

const initialState: any = {
  todos: [],
};

function nextTodoId(todos: any) {
  const maxId = todos.reduce(
    (maxId: number, todo: any) => Math.max(todo.id, maxId),
    -1
  );
  return maxId + 1;
}

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state: any, action: PayloadAction<any>): void {
      state = [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    },
    deleteTodo(state: any, action: PayloadAction<any>): void {
      state = state.filter((todo: any) => todo.id !== action.payload);
    },
  },
});

export const { reducer } = slice;

export const addTodo =
  (todo: any): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.addTodo(todo));
  };
