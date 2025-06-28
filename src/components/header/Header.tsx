import { geistMono } from '@/config/fonts';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <header className={`${geistMono.className} border-b border-general`}>
        <div className="container py-20">
          <h1
            className={`font-medium text-4xl sm:text-5xl lg:text-6xl xl:text-8xl`}>
            Acorta y comparte tus enlaces en segundos.
          </h1>
          <p className="max-w-(--breakpoint-sm) pt-6 text-gray-600 text-lg/7 font-medium dark:text-gray-400">
            Acorta URLs largas en un clic y compártelas al instante. Haz que tus
            enlaces luzcan limpios y fáciles de recordar.
          </p>
          <Link
            className="inline-block btn-primary my-10 max-w-[375px] text-sm/6"
            href={'#formUrl'}>
            Acortar
          </Link>
        </div>
      </header>
    </>
  );
};
