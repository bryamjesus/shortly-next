import {
  Geist,
  Geist_Mono,
  Inter,
  Montserrat_Alternates,
} from 'next/font/google';

export const generalFont = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const subTitleFont = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const inter = Inter({ subsets: ['latin'] });

export const titleFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['500', '700'],
});
