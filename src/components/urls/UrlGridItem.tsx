import { UrlState } from '@/lib/url.interface';
import { getBaseHostClient } from '@/utils/getBaseUrlClient';
import Link from 'next/link';

interface Props {
  url: UrlState;
}

export const UrlGridItem = ({ url }: Props) => {
  return (
    <>
      <div className={`w-full bg-(--background) p-5 rounded-xl`}>
        <div className="flex flex-col">
          <Link
            href={url.originalUrl}
            className="text-xl text-(--primary) cursor-pointer">{`${getBaseHostClient()}/${
            url.shortCode
          }`}</Link>
          <Link href={url.originalUrl}>{url.originalUrl}</Link>
        </div>
      </div>
    </>
  );
};
