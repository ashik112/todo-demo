import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "./tests/utils";
import { App } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/TODOS/i);
  expect(linkElement).toBeInTheDocument();
});
