import { geistMono } from '@/config/fonts';

export const Header = () => {
  return (
    <>
      <header>
        <div className="py-3">
          <h2
            className={`${geistMono.className} font-medium text-4xl md:text-5xl lg:text-6xl`}>
            Acorta tus enlaces en segundos
          </h2>
          <p className="pt-2 text-gray-600 text-[1rem] font-medium dark:text-gray-400">
            Transforma URLs largas en enlaces cortos y memorables. Totalmente
            gratuito.
          </p>
        </div>
      </header>
    </>
  );
};
