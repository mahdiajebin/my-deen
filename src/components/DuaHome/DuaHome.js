import React, { useState } from 'react';
import duas from '../../Data/Duas'; // Adjust path as necessary
import DuaTile from '../DuaTile/DuaTile'; // Adjust path as necessary
import Modal from '../Modal/Modal'; // Adjust path as necessary
import './DuaHome.css'; // Import the CSS file for styling

const DuaHome = () => {
    const [selectedDua, setSelectedDua] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDuas, setFilteredDuas] = useState(duas);

    const handleTileClick = (dua) => {
        setSelectedDua(dua);
    };

    const handleCloseModal = () => {
        setSelectedDua(null);
    };

    const handleSearchChange = (e) => {
        const term = e.target.value.trim().toLowerCase();
        setSearchTerm(term);
        filterDuas(term);
    };

    const filterDuas = (term) => {
        if (!term) {
            setFilteredDuas(duas);
        } else {
            const filtered = duas.filter((dua) => {
                return (
                    dua.duaTitle.toLowerCase().includes(term) ||
                    dua.duaArabic.toLowerCase().includes(term) ||
                    dua.duaTransliteration.toLowerCase().includes(term) ||
                    dua.duaTranslation.toLowerCase().includes(term)
                );
            });
            setFilteredDuas(filtered);
        }
    };

    return (
        <div className="dua-home">
                        <h1> Dua Collection </h1> <br></br>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search duas..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
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
