import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to="/impressum">Impressum</Link>&nbsp; | &nbsp;
      <Link to="/datenschutz">Datenschutz</Link>
    </div>
  );
}
