import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, children }) => {
    const modalClass = show ? "modal display-block" : "modal display-none";
    const modalContentClass = show ? "modal-content display-block" : "modal-content display-none";

    const handleClose = () => {
        onClose();
    };

    return (
        <div className={modalClass}>
            <div className={modalContentClass}>
                <span className="close" onClick={handleClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
