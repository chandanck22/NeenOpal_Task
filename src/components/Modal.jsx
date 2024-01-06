import React from 'react'
import './Modal.css';


const Modal = () => {
  return (
    <div className='modal-container'>
        <div className='modal'>
            <h2>Basic Modal</h2>
            <form>
            <div className='form-group'>
                <label htmlFor='name'>Name: <span className='required'>*</span></label>
                <input type='text' id='name' name='name' required />
            </div>

            <div className='form-group'>
                <label htmlFor='email'>Email: <span className='required'>*</span></label>
                <input type='email' id='email' name='email' required />
            </div>

            <div className='form-group'>
                <label htmlFor='phone'>Phone: <span className='required'>*</span></label>
                <input type='tel' id='phone' name='phone' required />
            </div>

            <div className='form-group'>
                <label htmlFor='website'>Website: <span className='required'>*</span></label>
                <input type='url' id='website' name='website' required />
            </div>

            <div className='button-group'>
                <button type='button' className='btn btn-ok'>OK</button>
                <button type='button' className='btn btn-cancel'>Cancel</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Modal