import { ClientRedirect } from '@/components/redirect/ClientRedirect';
import { getShortenedUrlByCode } from '@/services/UrlService';
import { redirect } from 'next/navigation';

interface ShortCodePageProps {
  params: { shortCode: string };
}
export default async function ShortCodePage({ params }: ShortCodePageProps) {
  const { shortCode } = params;

  debugger;

  if (!shortCode) {
    redirect('/');
  }

  try {
    const urlEntry = await getShortenedUrlByCode(shortCode);
    console.log({ shortCode, urlEntry });

    if (urlEntry && urlEntry.originalUrl) {
      return (
        <>
          <ClientRedirect urlEntry={urlEntry} />
        </>
      );
    } else {
      redirect('/');
    }
  } catch (error) {
    console.error('Error al buscar la URL acortada:', error);
    redirect('/');
  }
}
