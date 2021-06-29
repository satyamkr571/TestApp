import React from "react";
import "./todo.css";

export default function Todo({ todo }) {
  const { id, title, completed } = todo;
  const h3 = <h3>{title}</h3>;
  const text = completed ? <strike>hi {h3}</strike> : h3;
  return (
    <div data-testid={`todo-${id}`} className="todo">
      {text}
    </div>
  );
}
