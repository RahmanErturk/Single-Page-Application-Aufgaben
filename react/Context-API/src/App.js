import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./views/Home";
import ToDos from "./views/ToDos";
import Header from "./components/Header";
import TodosProvider from "./context/TodosProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <TodosProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<ToDos />} />
          </Routes>
        </TodosProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
