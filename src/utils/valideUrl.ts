import { UrlState } from '@/lib/url.interface';

export const existsShortCode = (shortCode: string, urls: UrlState[]) => {
  return urls.some((u) => u.shortCode === shortCode);
};
