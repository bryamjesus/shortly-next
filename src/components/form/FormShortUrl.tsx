import { geistMono } from '@/config/fonts';
import { ButtonShortUrl } from './ButtonShortUrl';
import { InputShortUrl } from './InputShortUrl';

export const FormShortUrl = () => {
  return (
    <>
      <form className={`${geistMono.className}`} action="">
        <div className="py-3 flex items-center flex-col gap-2 md:flex-row">
          <InputShortUrl />
          <ButtonShortUrl />
        </div>
      </form>
    </>
  );
};
