import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../todo";
import renderer from "react-test-renderer";

test("test", () => {
  expect(true);
});
afterEach(() => {
  cleanup();
});
it("should render todo component", () => {
  const todos = { id: "1", title: "Watch Movie", completed: false };

  render(<Todo todo={todos} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Watch Movie");
});
it("should render todo component", () => {
  const todos = { id: "2", title: "Cook Food", completed: true };

  render(<Todo todo={todos} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Cook Food");
  expect(todoElement).not.toContainHTML("<strike>");
});
it("matches snapshot", () => {
  const todo = { id: "2", title: "Cook Food", completed: true };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
it("matches snapshot 2", () => {
  const todo = { id: "3", title: "Take Rest", completed: true };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  //console.log(tree);
  expect(tree).toMatchSnapshot();
});
