'use client';
import { UrlState } from '@/lib/url.interface';
import { useRouter } from 'next/navigation';

interface Props {
  urlEntry: UrlState;
}

export const ClientRedirect = ({ urlEntry }: Props) => {
  const router = useRouter();
  router.push(urlEntry.originalUrl);
  return <></>;
};
