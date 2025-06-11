import { FormShortUrl } from '@/components/form/FormShortUrl';
import { geistMono } from '@/config/fonts';

export default function MainPage() {
  return (
    <>
      <div>
        <h2
          className={`${geistMono.className} font-black text-xl md:text-2xl lg:text-3xl`}>
          Acortar link
        </h2>
        <FormShortUrl />
      </div>
    </>
  );
}
