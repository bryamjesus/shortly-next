import { FULL_URL } from '@/config/global';
import { ResponseShortUrl, UrlState } from '@/lib/url.interface';

export const getShortUrl = async (url: string): Promise<UrlState> => {
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

  return data;
};

export const getShortenedUrlByCode = async (shortCode: string) => {
  try {
    const response = await fetch(`${FULL_URL}/${shortCode}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const { data }: ResponseShortUrl = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener URL por código:', error);
    throw new Error('No se pudo obtener la URL por código.');
  }
};
