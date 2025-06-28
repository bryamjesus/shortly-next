'use client';

import { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;

    if (isOpen && !dlg.open) dlg.showModal();
    if (!isOpen && dlg.open) dlg.close();

    const handleClose = () => onClose();
    dlg.addEventListener('close', handleClose);
    return () => dlg.removeEventListener('close', handleClose);
  }, [isOpen, onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="p-0 bg-transparent w-screen h-screen"
      style={{ border: 'none', padding: 0 }}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md mx-auto my-50">
        {children}
      </div>
    </dialog>
  );
};
