import { useState, useEffect, createContext } from "react";

export const TodosContext = createContext();

export default function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((json) => setTodos(json));
  }, []);

  return (
    <TodosContext.Provider
      value={{
        todos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
