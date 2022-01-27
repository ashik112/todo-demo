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
  return maxId + 2;
}

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state: any, action: PayloadAction<any>): void {
      state.todos = [
        {
          id: nextTodoId(state.todos),
          text: action.payload,
          createdAt: new Date(),
        },
        ...state.todos,
      ];
    },
    deleteTodo(state: any, action: PayloadAction<any>): void {
      state.todos = state.todos.filter(
        (todo: any) => todo.id !== action.payload
      );
    },
    updateTodo(state: any, action: PayloadAction<any>): void {
      console.log(action.payload);
      let list = JSON.parse(JSON.stringify(state.todos));
      list = list.map((item: any) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.text,
          };
        }
        return item;
      });
      console.log(list);
      state.todos = [];
      state.todos = [...list];
    },
  },
});

export const { reducer } = slice;

export const addTodo =
  (todo: string): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.addTodo(todo));
  };

export const updateTodo =
  (todo: string): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateTodo(todo));
  };
