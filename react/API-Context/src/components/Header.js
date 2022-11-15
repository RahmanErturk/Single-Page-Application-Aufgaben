import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">Home</Link>&nbsp; | &nbsp;
          <Link to="/todos">ToDos</Link>
        </ul>
      </nav>
    </header>
  );
}
