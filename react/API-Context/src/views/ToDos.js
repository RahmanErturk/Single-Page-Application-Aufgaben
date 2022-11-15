import React from "react";
import { useContext } from "react";
import { TodosContext } from "../context/TodosProvider";

export default function ToDos() {
  const { todos } = useContext(TodosContext);

  return (
    <>
      <h1>ToDos</h1>
      {todos.map((todo) => (
        <article key={todo.id}>
          <p>
            {todo.id}-) {todo.title}
          </p>
        </article>
      ))}
    </>
  );
}
