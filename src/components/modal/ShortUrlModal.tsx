import { useState } from 'react';
import Modal from './Modal';

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
    <Modal isOpen={isOpen} onClose={onClose} title="¡Tu URL Acortada!">
      <p className="mb-4 break-words">{shortUrl}</p>
      {/* <button
        onClick={handleCopy}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2">
        {copySuccess ? '¡Copiado!' : 'Copiar URL'}
      </button> */}
      <button
        onClick={onClose}
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
        Cerrar
      </button>
    </Modal>
  );
};
