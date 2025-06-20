import { UrlState } from '@/lib/url.interface';

export const isValidUrl = (value: string) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

export const existsShortCode = (shortCode: string, urls: UrlState[]) => {
  return urls.some((u) => u.shortCode === shortCode);
};
