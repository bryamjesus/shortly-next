'use client';
import { useAppSelector } from '@/hooks/storeHooks';
import { getBaseHostClient, getBaseUrlClient } from '@/utils/getBaseUrlClient';
import { Container } from '../ui/container/Container';
import { SubTitle } from '../ui/title/SubTitle';
import { UrlGridItem } from './UrlGridItem';

export const UrlGrid = () => {
  const urls = useAppSelector((state) => state.url);

  return (
    <>
      {urls && urls.length > 0 && (
        <Container className="pt-10">
          <SubTitle subtitle="Shortly Links" />
          <div className="w-full flex flex-col gap-5">
            {urls.map(({ originalUrl, shortCode }) => (
              <UrlGridItem
                key={shortCode}
                originalUrl={originalUrl}
                shortCode={shortCode}
              />
            ))}
          </div>
        </Container>
      )}
    </>
  );
};
