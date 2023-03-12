import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Nav className="py-3">
      <Nav.Item>
        <Link to="/products" className="p-2">
          Product
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/shopping" className="p-2">
          Shopping
        </Link>
      </Nav.Item>
    </Nav>
  );
};
