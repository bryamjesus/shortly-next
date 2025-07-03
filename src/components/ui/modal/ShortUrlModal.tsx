import { ModalPropsUrl } from '@/lib/modal.interface';
import { copyToClipboard } from '@/utils/clipboard';
import { getFullShortUrl } from '@/utils/valideUrl';
import { useState } from 'react';
import Modal from './Modal';

export const ShortUrlModal = ({ codeUrl, isOpen, onClose }: ModalPropsUrl) => {
  const [copied, setCopied] = useState(false);
  const { urlComplete, urlModal } = getFullShortUrl(codeUrl);

  const handleCopy = async () => {
    const success = await copyToClipboard(urlComplete);
    setCopied(success);
    setTimeout(() => setCopied(false), 1500);
    if (success) {
      setTimeout(() => onClose(), 1500);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="¡Tu URL Acortada!">
      <p>Copia el siguiente link</p>
      <div className="bg-(--gray-200) dark:bg-(--gray-800) w-full py-6 mt-6 rounded-xl flex flex-col justify-center items-center gap-3">
        <p className="break-words text-balance">{urlModal}</p>
        <button
          onClick={handleCopy}
          className="text-center bg-(--blue) hover:bg-(blue-hover) text-white py-2 px-4 transition-all cursor-pointer rounded-xl">
          {copied ? '¡Copiado!' : 'Copiar URL'}
        </button>
      </div>
    </Modal>
  );
};
