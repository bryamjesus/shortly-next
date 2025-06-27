import { geistMono } from '@/config/fonts';

export const Header = () => {
  return (
    <>
      <header>
        <div className="py-17">
          <h1
            className={`${geistMono.className} font-medium text-4xl sm:text-5xl lg:text-6xl xl:text-8xl`}>
            Acorta y comparte tus enlaces en segundos.
          </h1>
          <p className="max-w-(--breakpoint-sm) pt-2 text-gray-600 text-lg/7 font-medium dark:text-gray-400">
            Acorta URLs largas en un clic y compártelas al instante. Haz que tus
            enlaces luzcan limpios y fáciles de recordar.
          </p>
        </div>
      </header>
    </>
  );
};
