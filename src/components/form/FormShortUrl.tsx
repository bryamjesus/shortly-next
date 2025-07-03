'use client';

import { useAppDispatch } from '@/hooks/storeHooks';
import { getShortUrl } from '@/services/UrlService';
import { addUrlShort } from '@/store/url/urlSlice';
import { useState } from 'react';
import { Button } from '../ui/button/Button';
import { Container } from '../ui/container/Container';
import { ScissorsIcon } from '../ui/icons/ScissorsIcon';
import { ShortUrlModal } from '../ui/modal/ShortUrlModal';
import { SubTitle } from '../ui/title/SubTitle';
import { UrlGrid } from '../urls/UrlGrid';
import { InputShortUrl } from './InputShortUrl';

export const FormShortUrl = () => {
  const dispatch = useAppDispatch();

  const [url, setUrl] = useState('');
  const [validationError, setValidationError] = useState('');
  const [urlShort, setUrlShort] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const isButtonDisabled = !url || !!validationError || isSubmitting;
  const scissorsIconColor = isButtonDisabled ? 'var(--icon-link-color)' : 'var(--white)';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setValidationError('');
    try {
      const urlData = await getShortUrl(url);
      dispatch(addUrlShort(urlData));
      setUrl('');
      setUrlShort(urlData.shortCode);
      setModalOpen(true);
    } catch (apiError) {
      dispatch(
        addUrlShort({
          originalUrl:
            'https://www.microsoft.com/es-es/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fmail%2f0%2f%3fnlp%3d0&sdf=0',
          shortCode: '7DYxL9dU',
        })
      );
      console.error('Error al enviar la URL:', apiError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="formUrl" className="py-20 bg-(--light)">
        <Container>
          <SubTitle subtitle="Acortar" />
          <form onSubmit={handleSubmit}>
            <div className="py-3 flex gap-3 flex-col md:flex-row md:items-start">
              <InputShortUrl
                url={url}
                setUrl={setUrl}
                error={validationError}
                setError={setValidationError}
              />
              <Button
                type="submit"
                disabled={isButtonDisabled}
                className="md:basis-1/4">
                <ScissorsIcon
                  className="w-6 h-6 hover:text-blue-500 transition-colors"
                  color={`${scissorsIconColor}`}
                />
              </Button>
            </div>
          </form>
        </Container>
        <UrlGrid />
        <ShortUrlModal
          isOpen={modalOpen}
          codeUrl={urlShort}
          onClose={() => setModalOpen(false)}
        />
      </section>
    </>
  );
};
