import { FULL_URL } from '@/config/global';

interface Data {
  originalUrl: string;
  shortCode: string;
}

interface ResponseShortUrl {
  status: string;
  message: string;
  data: Data;
  code: number;
}

export const getShortUrl = async (url: string): Promise<Data> => {
  console.log({ FULL_URL, url });

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
  // const { originalUrl, shortCode } = data;

  console.log('Respuesta del servidor:', { data });

  return data;

  // return { error: '' };
};
