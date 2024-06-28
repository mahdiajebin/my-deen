import React from 'react';
import './DuaTile.css';

const DuaTile = ({ dua, onClick }) => {
    return (
        <div className="dua-tile" onClick={onClick}>
            <h2 className="dua-title">{dua.duaTitle}</h2>
            <p className="arabic">{dua.duaArabic}</p>
            <p className="transliteration">{dua.duaTransliteration}</p>
            <p className="translation">{dua.duaTranslation}</p>
            <footer className="citation">{dua.duaCitation}</footer>
        </div>
    );
};

export default DuaTile;
