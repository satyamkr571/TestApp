import React from "react";
import ReactDOM from "react-dom";
import Button from "../button";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
afterEach(cleanup);
it("BUTTON COMPONENT IS RENDERED", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it("BUTTON COMPONENT IS RENDERED", () => {
  const { getByTestId } = render(<Button label="Click Me" />);
  expect(getByTestId("buttontestid")).toHaveTextContent("Click Me");
});

it("BUTTON COMPONENT IS RENDERED", () => {
  const { getByTestId } = render(<Button label="Submit"></Button>);
  expect(getByTestId("buttontestid")).toHaveTextContent("Submit");
});

it("it matches snapshot", () => {
  const tree = renderer.create(<Button label="Click Me"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
it("it matches snapshot", () => {
  const tree = renderer.create(<Button label="Click "></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
