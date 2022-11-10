import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

export default function Header({ countProducts }) {
  return (
    <div>
      <Navbar className="mb-4" bg="warning">
        <Container>
          <Navbar.Brand>
            <Link to="/">Flowmarkt</Link>
          </Navbar.Brand>
          <p>{countProducts} Produkte im Warenkorb</p>
        </Container>
      </Navbar>
    </div>
  );
}
