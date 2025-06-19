import { FULL_URL } from '@/config/global';
import { ResponseShortUrl, UrlState } from '@/lib/url.interface';

export const getShortUrl = async (url: string): Promise<UrlState> => {
  // console.log({ FULL_URL, url });

  const response = await fetch(FULL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });
  if (!response.ok) {
    throw new Error(`Error en la solicitud: ${response.status}`);
  }
  const { data }: ResponseShortUrl = await response.json();

  // console.log('Respuesta del servidor:', { data });

  return data;
};
