import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("APP COMPONENT IS RENDERED", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
