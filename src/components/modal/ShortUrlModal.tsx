import { ModalPropsUrl } from '@/lib/modal.interface';
import { copyToClipboard } from '@/utils/clipboard';
import { useState } from 'react';
import Modal from './Modal';

export const ShortUrlModal = ({ shortUrl, isOpen, onClose }: ModalPropsUrl) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(shortUrl);
    setCopied(success);
    setTimeout(() => setCopied(false), 1500);
    if (success) {
      setTimeout(() => onClose(), 1500);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="¡Tu URL Acortada!">
      <p className="mb-4 break-words">{shortUrl}</p>
      <button
        onClick={handleCopy}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2">
        {copied ? '¡Copiado!' : 'Copiar URL'}
      </button>
      <button
        onClick={onClose}
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
        Cerrar
      </button>
    </Modal>
  );
};
