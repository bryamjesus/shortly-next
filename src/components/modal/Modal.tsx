// components/Modal.tsx
import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Efecto para manejar el bloqueo de scroll del body y el foco inicial
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Bloquear scroll del body
      // Opcional: enfocar el modal o un elemento dentro de él al abrir
      // setTimeout(() => modalRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = 'unset'; // Restaurar scroll del body
    }
    return () => {
      document.body.style.overflow = 'unset'; // Asegurar que el scroll se restaure al desmontar
    };
  }, [isOpen]);

  // Manejar el cierre con la tecla Escape
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
    // Overlay del modal
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Cierra el modal al hacer clic en el overlay
    >
      {/* Contenido del modal */}
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative"
        role="dialog" // Rol ARIA para indicar que es un cuadro de diálogo
        aria-modal="true" // Indica que es un modal
        aria-labelledby="modal-title" // Apunta al título del modal
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el overlay
        tabIndex={-1} // Permite enfocar el modal programáticamente
      >
        <h2 id="modal-title" className="text-xl font-bold mb-4">
          {title}
        </h2>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Cerrar modal" // Etiqueta para lectores de pantalla
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
