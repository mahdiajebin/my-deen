import React from 'react';
import DuaCard from '../Card/DuaCard';
import './MainContent.css';

function MainContent({ onCategoryClick }) {
  return (
    <main className="main-content">
      <div className="dua-section">
        <div className="dua-section-cards">
          <DuaCard title="Prophetic Dua" description="" onClick={() => onCategoryClick('Prophetic Dua')} />
          <DuaCard title="Quranic Dua" description="" onClick={() => onCategoryClick('Quranic Dua')} />
          <DuaCard title="Sahabi Dua" description="" onClick={() => onCategoryClick('Sahabi Dua')} />
          <DuaCard title="All Dua" description="" onClick={() => onCategoryClick('All ')} />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
