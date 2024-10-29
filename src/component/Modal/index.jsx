import React from 'react'

const Modal = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;
    
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
        <div   className="relative w-11/12 max-w-md bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-out scale-90 opacity-0 animate-modalAppear"
        onClick={(e) => e.stopPropagation()} // Prevent click events from propagating to the overlay
      >     
        {children}
            <button>Join Us as an Ambassador</button>
        </div>
    </div>
  )
}

export default Modal