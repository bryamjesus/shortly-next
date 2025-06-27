import { useState } from 'react';
import { Modal } from './Modal';

export const ShortUrlModal = ({
  shortUrl,
  isOpen,
  onClose,
}: {
  shortUrl: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // copy(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center space-y-4">
        <h2 className="text-xl font-semibold">Enlace acortado</h2>
        <p className="break-all text-blue-600">{shortUrl}</p>
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {copied ? 'Copiado ✅' : 'Copiar enlace'}
        </button>
        <button
          onClick={onClose}
          className="mt-2 text-sm text-gray-500 hover:underline">
          Cerrar
        </button>
      </div>
    </Modal>
  );
};
