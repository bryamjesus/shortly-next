'use client';
import { subTitleFont } from '@/config/fonts';
import { addUrlShort } from '@/features/url/urlSlice';
import { useAppDispatch } from '@/hooks/storeHooks';
import { getShortUrl } from '@/services/UrlService';
import { useState } from 'react';
import { ShortUrlModal } from '../modal/ShortUrlModal';
import { UrlGrid } from '../urls/UrlGrid';
import { ButtonShortUrl } from './ButtonShortUrl';
import { InputShortUrl } from './InputShortUrl';

export const FormShortUrl = () => {
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
      <main id="formUrl" className="py-20 bg-white">
        <div className={`container`}>
          <h2 className={`${subTitleFont.className} subtitle pb-4`}>Acortar</h2>
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
          </form>
        </div>
        <UrlGrid />
        <ShortUrlModal
          isOpen={modalOpen}
          codeUrl={urlShort}
          onClose={() => setModalOpen(false)}
        />
      </main>
    </>
  );
};
