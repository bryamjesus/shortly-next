import { secondFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer
      className={`${secondFont.className} border-t border-general flex w-full justify-center text-sm/6 py-6`}>
      <Link href="/">
        <span className={`antialiased font-bold`}>Shortly </span>
        <span>| Link </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        Privacidad & Legal
      </Link>
    </footer>
  );
};
