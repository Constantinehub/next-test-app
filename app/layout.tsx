import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import QueryProvider from '@/components/QueryProvider';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dashboard App',
  description: 'Application created for testing features',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen flex overflow-hidden`}
      >
        <Sidebar />
        <main className='w-full flex flex-col'>
          <Header />
          <div className='grow flex flex-col overflow-auto'>
            <QueryProvider>
              <div className='grow flex flex-col p-6 bg-slate-100 overflow-auto'>
                {children}
              </div>
            </QueryProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
