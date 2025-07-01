import { Providers } from '@/components/providers/Providers';
import type { Metadata } from 'next';
import './globals.css';
import { generalFont } from '@/config/fonts';

export const metadata: Metadata = {
  title: 'Shortly',
  description: 'Acortador de links',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen ${generalFont.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
