'use client';
import { geistMono } from '@/config/fonts';
import { addUrlShort } from '@/features/url/urlSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { getShortUrl } from '@/services/UrlService';
import { useState } from 'react';
import { ButtonShortUrl } from './ButtonShortUrl';
import { InputShortUrl } from './InputShortUrl';

export const FormShortUrl = () => {
  const urls = useAppSelector((state) => state.url);
  const dispatch = useAppDispatch();

  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);
    const urlData = await getShortUrl(url);
    dispatch(addUrlShort(urlData));
    setUrl('');
    setSubmitting(false);
  };

  return (
    <>
      <form className={`${geistMono.className}`} onSubmit={handleSubmit}>
        <div className="py-3 flex items-center flex-col gap-2 md:flex-row">
          <InputShortUrl
            url={url}
            setUrl={setUrl}
            error={error}
            setError={setError}
          />
          <ButtonShortUrl disabled={!url || !!error || submitting} />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {urls.map((url) => (
          <p key={url.shortCode}>{url.originalUrl}</p>
        ))}
      </form>
    </>
  );
};
