import { geistMono } from '@/config/fonts';
import { UrlState } from '@/lib/url.interface';
import { getBaseHostClient } from '@/utils/getBaseUrlClient';
import Link from 'next/link';

interface Props {
  urlObject: UrlState;
}

export const UrlGridItem = ({ urlObject }: Props) => {
  return (
    <>
      <div
        className={`${geistMono.className} w-full bg-(--background) p-5 rounded-xl`}>
        <div className="flex flex-col">
          <Link
            href={urlObject.originalUrl}
            className="text-xl text-(--primary) cursor-pointer">{`${getBaseHostClient()}/${
            urlObject.shortCode
          }`}</Link>
          <Link href={urlObject.originalUrl}>{urlObject.originalUrl}</Link>
        </div>
      </div>
    </>
  );
};
