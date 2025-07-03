import { secondFont } from '@/config/fonts';
import { UrlState } from '@/lib/url.interface';
import { copyToClipboard } from '@/utils/clipboard';
import { getBaseHostClient } from '@/utils/getBaseUrlClient';
import Link from 'next/link';
import { useState } from 'react';
import { CopyIcon } from '../ui/icons/CopyIcon';

export const UrlGridItem = ({ originalUrl, shortCode }: UrlState) => {
  const [copied, setCopied] = useState(false);

  const shortUrlHref = `${getBaseHostClient()}/${shortCode}`;

  const handleCopy = async () => {
    const success = await copyToClipboard(shortUrlHref);
    setCopied(success);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`w-full bg-(--gray-200) px-4 py-7 rounded-xl md:py-5 dark:bg-(--gray-800)`}>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-3 md:basis-3/4 min-w-0">
          <Link
            href={originalUrl}
            className="text-lg text-(--blue) font-medium whitespace-nowrap overflow-hidden text-ellipsis block">
            {shortUrlHref}
          </Link>
          <Link
            href={originalUrl}
            className={`inline-block w-full ${secondFont.className} text-sm whitespace-nowrap overflow-hidden text-ellipsis `}>
            {originalUrl}
          </Link>
        </div>
        <div className="md:basis-1/4">
          <button
            onClick={handleCopy}
            className={`${secondFont.className} text-center bg-(--blue) hover:bg-(--blue-hover) text-(--white) py-1 px-6 transition-all cursor-pointer rounded-xl`}>
            <div className="flex justify-center items-center gap-1">
              {copied ? (
                '¡Copiado!'
              ) : (
                <>
                  <CopyIcon className="w-4 h-4" color="#f9fafb" />
                  Copiar
                </>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
