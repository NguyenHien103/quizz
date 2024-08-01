import React from 'react';
import Modal from 'react-modal';
import './modalcomponent.scss';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root'); // Ensure this matches your app's root element

const ModalComponent = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Modal"
            overlayClassName="modal-overlay"
        >
            <button className="modal-close" onClick={onRequestClose}>X</button>
            {children}
        </Modal>
    );
};

export default ModalComponent;
