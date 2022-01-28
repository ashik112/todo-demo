import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppThunk } from "../../store";
import { format } from "date-fns";
import { ITodo, ITodos } from "../../../interfaces";

interface IState {
  todos: ITodos;
}

const initialState: IState = {
  todos: [],
};

function nextTodoId(todos: ITodos) {
  const maxId = todos.reduce(
    (maxId: number, todo: ITodo) => Math.max(todo.id || 0, maxId),
    0
  );
  return maxId + 1;
}

export const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state: IState, action: PayloadAction<any>): void {
      state.todos = [
        {
          id: nextTodoId(state.todos),
          text: action.payload,
          createdAt: format(new Date(), "yyyy-mm-dd, HH:mm:ss"),
        },
        ...state.todos,
      ];
    },
    deleteTodo(state: IState, action: PayloadAction<any>): void {
      state.todos = state.todos.filter(
        (todo: ITodo) => todo.id !== action.payload.id
      );
    },
    updateTodo(state: IState, action: PayloadAction<any>): void {
      let list = JSON.parse(JSON.stringify(state.todos));
      list = list.map((item: ITodo) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.text,
          };
        }
        return item;
      });
      state.todos = [];
      state.todos = [...list];
    },
  },
});

export const { reducer } = slice;

export const addTodo =
  (todoText: string): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.addTodo(todoText));
  };

export const updateTodo =
  (todo: ITodo): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.updateTodo(todo));
  };

export const deleteTodo =
  (todo: ITodo): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.deleteTodo(todo));
  };
