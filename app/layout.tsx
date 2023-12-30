import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './global.scss';

const opensans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joodam',
  description: 'Welcome to Joodam',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
