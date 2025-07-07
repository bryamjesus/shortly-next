'use client';
import { useRouter } from 'next/navigation';

interface Props {
  url: string;
}

export const ClientRedirect = ({ url }: Props) => {
  const router = useRouter();
  router.push(url);
  return <></>;
};

// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// interface Props {
//   url: string;
// }

// export const ClientRedirect = ({ url }: Props) => {
//   const router = useRouter();

//   useEffect(() => {
//     router.replace(url);
//   }, [url, router]);

//   return null;
// };
