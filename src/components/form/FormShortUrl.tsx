'use client';
import { geistMono, geistSans } from '@/config/fonts';
import { addUrlShort } from '@/features/url/urlSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { getShortUrl } from '@/services/UrlService';
import { useState } from 'react';
import { ShortUrlModal } from '../modal/ShortUrlModal';
import { ButtonShortUrl } from './ButtonShortUrl';
import { InputShortUrl } from './InputShortUrl';

export const FormShortUrl = () => {
  const urls = useAppSelector((state) => state.url);
  const dispatch = useAppDispatch();

  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const [urlShort, setUrlShort] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);
    const urlData = await getShortUrl(url);
    dispatch(addUrlShort(urlData));
    setUrl('');
    setUrlShort(urlData.shortCode);
    setSubmitting(false);
    setModalOpen(true);
  };

  return (
    <>
      <main id="formUrl">
        <div className={`${geistMono.className} container py-20`}>
          <h2
            className={`${geistSans.className} text-[2.5rem]/10 font-medium tracking-tighter text-balance pb-4`}>
            Acortar.
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="py-3 flex gap-3 flex-col md:flex-row md:items-start">
              <InputShortUrl
                url={url}
                setUrl={setUrl}
                error={error}
                setError={setError}
              />
              <ButtonShortUrl disabled={!url || !!error || submitting} />
            </div>

            <div className="w-full">
              {urls.map((url) => (
                <div key={url.shortCode}>{url.originalUrl}</div>
              ))}
            </div>
          </form>
          <ShortUrlModal
            isOpen={modalOpen}
            shortUrl={urlShort}
            onClose={() => setModalOpen(false)}
          />
        </div>
      </main>
    </>
  );
};
