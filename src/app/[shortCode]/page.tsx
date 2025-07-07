import { ClientRedirect } from '@/components/redirect/ClientRedirect';
import { getShortenedUrlByCode } from '@/services/UrlService';
import { redirect } from 'next/navigation';

type Props = {
  params: Promise<{ shortCode: string }>;
};

export default async function ShortCodePage({ params }: Props) {
  const { shortCode } = await params;

  const urlEntry = await getShortenedUrlByCode(shortCode);

  if (!urlEntry?.originalUrl) {
    redirect('/');
  }

  return <ClientRedirect url={urlEntry.originalUrl} />;
}
