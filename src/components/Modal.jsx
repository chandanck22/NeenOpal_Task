import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ card, onSave, onCancel }) => {
    const [editedCard, setEditedCard] = useState({ ...card });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCard((prevCard) => ({ ...prevCard, [name]: value }));
    };

    const handleSave = () => {
        onSave(editedCard);
    };

    return (
        <div className='modal-container'>
            <div className='modal'>
                <div className='modal-header'>
                    <h2>Basic Modal</h2>
                    <span className='close-icon' onClick={onCancel}>
                        &times;
                    </span>
                </div>
                <div className='line'></div>

                <form>
                    <div className='form-group'>
                        <label htmlFor='name'>Name: <span className='required'>*</span></label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={editedCard.name}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email: <span className='required'>*</span></label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={editedCard.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='phone'>Phone: <span className='required'>*</span></label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            value={editedCard.phone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='website'>Website: <span className='required'>*</span></label>
                        <input
                            type='url'
                            id='website'
                            name='website'
                            value={editedCard.website}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='line'></div>

                    <div className='button-group'>
                        <button type='button' onClick={handleSave} className='btn btn-ok'>
                            Save
                        </button>
                        <button type='button' onClick={onCancel} className='btn btn-cancel'>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
