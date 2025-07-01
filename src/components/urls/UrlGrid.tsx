'use client';
import { geistSans } from '@/config/fonts';
import { useAppSelector } from '@/hooks/storeHooks';
import { getBaseHostClient, getBaseUrlClient } from '@/utils/getBaseUrlClient';
import { UrlGridItem } from './UrlGridItem';

export const UrlGrid = () => {
  const urls = useAppSelector((state) => state.url);

  console.log(urls, getBaseUrlClient(), getBaseHostClient());
  return (
    <>
      {urls && urls.length > 0 && (
        <main className="container pt-10">
          <h2 className={`${geistSans.className} subtitle pb-4`}>
            Shortly Links
          </h2>
          <div className="w-full flex flex-col gap-3">
            {urls.map((url) => (
              <UrlGridItem key={url.shortCode} urlObject={url} />
              // <div key={url.shortCode}>{url.originalUrl}</div>
            ))}
          </div>
        </main>
      )}
    </>
  );
};
