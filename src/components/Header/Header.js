import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <div>
      <h1 className="header">{title}</h1>
      <h1 className="header">Another text</h1>
    </div>
  );
}
