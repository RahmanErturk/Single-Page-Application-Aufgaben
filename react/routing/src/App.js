import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Main from "./views/Main";
import Products from "./views/Products";

// console.log(window.location);
// const path = window.location.pathname;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Main (Link)</Link>&nbsp;|&nbsp;
          <Link to="/products">Products (Link)</Link>
        </header>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <footer>Footer</footer>
      </BrowserRouter>
      {/* {path === "/" && <Main />}
        {path === "/products" && <Products />} */}
    </div>
  );
}

export default App;
