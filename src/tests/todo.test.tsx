import timekeeper from "timekeeper";
import { slice, reducer } from "../redux/reducers/slices/todosSlice";
import { format } from "date-fns";

beforeEach(() => {
  timekeeper.freeze(new Date()); // Freeze time for testing
});

afterEach(() => {
  timekeeper.reset(); // Reset.
});

test("should return the initial state", () => {
  expect(
    reducer(undefined, {
      type: undefined,
    })
  ).toEqual({
    todos: [],
  });
});

test("should handle a todo being added to an empty list", () => {
  const previousState = { todos: [] };
  const dateNow = format(new Date(), "yyyy-mm-dd, HH:mm:ss");
  expect(
    reducer(previousState, slice.actions.addTodo("Run the tests"))
  ).toEqual({
    todos: [
      {
        text: "Run the tests",
        createdAt: dateNow,
        id: 1,
      },
    ],
  });
});

test("should handle a todo being added to an existing list", () => {
  const currentDate = new Date();
  const dateStringNow = format(currentDate, "yyyy-mm-dd, HH:mm:ss");
  const previousState = {
    todos: [
      {
        text: "Run the tests",
        createdAt: dateStringNow,
        id: 1,
      },
    ],
  };
  expect(reducer(previousState, slice.actions.addTodo("Use Redux"))).toEqual({
    todos: [
      {
        text: "Use Redux",
        createdAt: dateStringNow,
        id: 2,
      },
      {
        text: "Run the tests",
        createdAt: dateStringNow,
        id: 1,
      },
    ],
  });
});

test("should handle a todo being updated to an existing list", () => {
  const currentDate = new Date();
  const dateStringNow = format(currentDate, "yyyy-mm-dd, HH:mm:ss");
  const previousState = {
    todos: [
      {
        text: "Use Redux",
        createdAt: dateStringNow,
        id: 2,
      },
      {
        text: "Run the tests",
        createdAt: dateStringNow,
        id: 1,
      },
    ],
  };
  expect(
    reducer(
      previousState,
      slice.actions.updateTodo({
        id: 2,
        text: "Use Redux everywhere",
      })
    )
  ).toEqual({
    todos: [
      {
        text: "Use Redux everywhere",
        createdAt: dateStringNow,
        id: 2,
      },
      {
        text: "Run the tests",
        createdAt: dateStringNow,
        id: 1,
      },
    ],
  });
});

test("should handle a todo being removed from an existing list", () => {
  const currentDate = new Date();
  const dateStringNow = format(currentDate, "yyyy-mm-dd, HH:mm:ss");
  const previousState = {
    todos: [
      {
        text: "Use Redux",
        createdAt: dateStringNow,
        id: 2,
      },
      {
        text: "Run the tests",
        createdAt: dateStringNow,
        id: 1,
      },
    ],
  };
  expect(
    reducer(
      previousState,
      slice.actions.deleteTodo({
        id: 1,
      })
    )
  ).toEqual({
    todos: [
      {
        text: "Use Redux",
        createdAt: dateStringNow,
        id: 2,
      },
    ],
  });
});
