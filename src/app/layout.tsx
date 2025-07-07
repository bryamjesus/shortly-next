import { Providers } from '@/components/providers/Providers';
import { principalFont } from '@/config/fonts';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shortly',
  description: 'Acortador de links',
  icons:{
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen ${principalFont.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
