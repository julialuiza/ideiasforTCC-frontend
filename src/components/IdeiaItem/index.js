import React from "react";

import "./styles.css";

export default function IdeiaItem({ ideia }) {
  return (
    <li className="ideia-item">
      <header>
        <div className="user-info">
          <strong>{ideia.title}</strong>
          <span>Áreas: {ideia.areas.join(", ")}</span>
        </div>
      </header>
      <p>{ideia.description}</p>
    </li>
  );
}
