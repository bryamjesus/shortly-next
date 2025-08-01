import { Features } from '@/components/features/Features';
import { FormShortUrl } from '@/components/form/FormShortUrl';
import { Header } from '@/components/header/Header';

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <FormShortUrl />
        <Features />
      </main>
    </>
  );
}
