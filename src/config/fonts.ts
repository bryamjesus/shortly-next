import {
  Geist,
  Geist_Mono,
  Inter,
  Montserrat_Alternates,
} from 'next/font/google';

export const principalFont = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const secondFont = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const inter = Inter({ subsets: ['latin'] });

export const titleFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['500', '700'],
});
