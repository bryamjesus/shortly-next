import { geistMono } from '@/config/fonts';
import { ModalProps } from '@/lib/modal.interface';
import React, { useEffect, useRef } from 'react';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`${geistMono.className} fixed inset-0 bg-white/3 backdrop-blur-sm flex items-center justify-center z-50 p-3`}
      onClick={onClose}>
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}>
        <h2 id="modal-title" className="text-xl font-bold mb-4">
          {title}
        </h2>
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
          aria-label="Cerrar modal">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
