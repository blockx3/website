import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/components/HomePage/Footer';
import { Toaster } from '@/components/ui/toaster';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'BlockX3',
  description: 'Turning Ideas into Reality: Open-Source Innovation Through Community Collaboration',
  keywords: 'blockchain, open-source,development, innovation, community, collaboration',
  openGraph: {
    images: [
      {
        url: 'https://static.aaraz.me/blockx3/blockx3_blue.jpg',
        type: 'image/jpeg',
        height: 804,
        width: 630,
        alt: 'BlockX3',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@block_x3',
    images: [
      {
        url: 'https://static.aaraz.me/blockx3/blockx3_blue.jpg',
        type: 'image/jpeg',
        height: 804,
        width: 630,
        alt: 'BlockX3',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
