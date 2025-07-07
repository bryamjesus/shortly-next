'use client';
import { UrlState } from '@/lib/url.interface';
import { redirect } from 'next/navigation';

interface Props {
  urlEntry: UrlState;
}

export const ClientRedirect = ({ urlEntry }: Props) => {
  // const router = useRouter();
  redirect(urlEntry.originalUrl);
  return null; // No UI
};
