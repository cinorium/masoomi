import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Masoomi Law Associates — Chambers of Advocate Syed Shahbaz Ali Shah Masoomi',
  description:
    'High Court of Sindh Enrolled Chambers in Karachi specializing in criminal defense, urgent bail petitions, constitutional writs, FIA & NAB white-collar defense, and civil litigation.',
  openGraph: {
    title: 'Masoomi Law Associates — Chambers of Advocate Syed Shahbaz Ali Shah Masoomi',
    description:
      'High Court of Sindh Enrolled Chambers in Karachi specializing in criminal defense, urgent bail petitions, constitutional writs, FIA & NAB white-collar defense, and civil litigation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masoomi Law Associates — Chambers of Advocate Syed Shahbaz Ali Shah Masoomi',
    description:
      'High Court of Sindh Enrolled Chambers in Karachi specializing in criminal defense, urgent bail petitions, constitutional writs, FIA & NAB white-collar defense, and civil litigation.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen bg-[#FBF9F5] text-slate-800 antialiased selection:bg-[#EBE2D3] selection:text-[#7A5C22]">
        {children}
      </body>
    </html>
  );
}
