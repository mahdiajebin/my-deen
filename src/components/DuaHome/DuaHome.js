import React, { useState, useEffect } from 'react';
import duas from '../../Data/Duas'; 
import QuranicDua from '../../Data/QuranicDua'; 
import PropheticDua from '../../Data/PropheticDua'; 
import SahabiDua from '../../Data/SahabiDua'; 
import DuaTile from '../DuaTile/DuaTile';
import Modal from '../Modal/Modal'; 
import './DuaHome.css'; 
import MainContent from '../MainContent/MainContent';

const DuaHome = () => {
    const [selectedDua, setSelectedDua] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDuas, setFilteredDuas] = useState(duas);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        filterDuas(searchTerm, selectedCategory);
    }, [searchTerm, selectedCategory]);

    const handleTileClick = (dua) => {
        setSelectedDua(dua);
    };

    const handleCloseModal = () => {
        setSelectedDua(null);
    };

    const handleSearchChange = (e) => {
        const term = e.target.value.trim().toLowerCase();
        setSearchTerm(term);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filterDuas = (term, category) => {
        let filtered = duas;
        if (category === 'Quranic Dua') {
            filtered = QuranicDua;
        }
        if (category === 'Prophetic Dua') {
            filtered = PropheticDua;
        }
        if (category === 'Sahabi Dua') {
            filtered = SahabiDua;
        }
        // Add other category filters as needed
        if (term) {
            filtered = filtered.filter((dua) => {
                return (
                    dua.duaTitle.toLowerCase().includes(term) ||
                    dua.duaArabic.toLowerCase().includes(term) ||
                    dua.duaTransliteration.toLowerCase().includes(term) ||
                    dua.duaTranslation.toLowerCase().includes(term)
                );
            });
        }
        setFilteredDuas(filtered);
    };

    return (
        
        <div className="dua-home">
            <h1> Dua Collection </h1> 
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search duas..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <MainContent onCategoryClick={handleCategoryClick} />

            <div className="dua-tiles-container">
                {filteredDuas.length > 0 ? (
                    filteredDuas.map((dua, index) => (
                        <DuaTile key={index} dua={dua} onClick={() => handleTileClick(dua)} />
                    ))
                ) : (
                    <p>No duas found matching "{searchTerm}".</p>
                )}
            </div>

            <Modal show={!!selectedDua} onClose={handleCloseModal}>
                {selectedDua && (
                    <div className="dua-tile-modal">
                        <h2 className="dua-title">{selectedDua.duaTitle}</h2>
                        <p className="arabic">{selectedDua.duaArabic}</p>
                        <p className="transliteration">{selectedDua.duaTransliteration}</p>
                        <p className="translation">{selectedDua.duaTranslation}</p>
                        <footer className="citation">{selectedDua.duaCitation}</footer>
                        <button className="modal-back-button" onClick={handleCloseModal}>
                            Back
                        </button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default DuaHome;
