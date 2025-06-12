'use client';
import { shortURL } from '@/actions/short-url';
import { geistMono } from '@/config/fonts';
import { useState } from 'react';
import { ButtonShortUrl } from './ButtonShortUrl';
import { InputShortUrl } from './InputShortUrl';

export const FormShortUrl = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const isValidUrl = (value: string) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidUrl(url)) {
      setError('Por favor ingresa una URL válida.');
      return;
    }
    console.log('hola', { url });
    setError('');
    setSubmitting(true);

    shortURL();
    setSubmitting(false);
  };
  return (
    <>
      <form className={`${geistMono.className}`} onSubmit={handleSubmit}>
        <div className="py-3 flex items-center flex-col gap-2 md:flex-row">
          <InputShortUrl url={url} setUrl={setUrl} error={error} />
          <ButtonShortUrl disabled={!url || !!error || submitting} />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </>
  );
};
