import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'العروض واخر الخدمات',
  description: 'العروض واخر الخدمات الحصرية تجدوها هنا',
  openGraph: {
    images: [
      {
        url: 'https://i.ibb.co/0VCJFvPc/verified-2.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://i.ibb.co/0VCJFvPc/verified-2.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir='rtl'>
          <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXX" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXX');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
