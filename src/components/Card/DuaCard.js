import React from 'react';
import './DuaCard.css';

function DuaCard({ title, description, onClick }) {
  return (
    <div className="d-card card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default DuaCard;
