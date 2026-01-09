import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import '../styles/globals.css';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400', '700'],
   variable: '--font-poppins',
});

export const metadata: Metadata = {
   title: 'Bixol Cleaning | profesyonel temizlik hizmetleri',
   description:
      'Bixol Cleaning, profesyonel temizlik hizmetleri sunan lider bir şirkettir. Ev, ofis ve endüstriyel temizlikte uzmanlaşmış ekibimizle hijyen ve memnuniyet garantisi veriyoruz.',
   keywords:
      'temizlik hizmetleri, profesyonel temizlik, ev temizliği, ofis temizliği, endüstriyel temizlik, hijyen, Bixol Cleaning',
   authors: [{ name: 'Bixol Cleaning', url: 'https://bixolcleaning.com' }],
   openGraph: {
      title: 'Bixol Cleaning | professional cleaning services',
      description:
         'Bixol Cleaning, profesyonel temizlik hizmetleri sunan lider bir şirkettir. Ev, ofis ve endüstriyel temizlikte uzmanlaşmış ekibimizle hijyen ve memnuniyet garantisi veriyoruz.',
      url: 'https://bixolcleaning.com',
      siteName: 'Bixol Cleaning',
      images: [
         {
            url: 'https://bixolcleaning.com/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Bixol Cleaning',
         },
      ],
      locale: 'tr_TR',
      type: 'website',
   },
   icons: {
      icon: {
         url: '/favicon.png',
         type: 'image/png',
      },
   },
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="tr">
         <body className={poppins.className}>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
