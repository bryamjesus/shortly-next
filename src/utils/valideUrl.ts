import { UrlState } from '@/lib/url.interface';

export const isValidUrl = (value: string): boolean => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

export const existsShortCode = (
  shortCode: string,
  urls: UrlState[]
): boolean => {
  return urls.some((u) => u.shortCode === shortCode);
};

export const getFullShortUrl = (
  codeURL: string
): { urlComplete: string; urlModal: string } => {
  return {
    urlComplete: `http://localhost:3000/${codeURL}`,
    urlModal: `localhost:3000/${codeURL}`,
  };
};
