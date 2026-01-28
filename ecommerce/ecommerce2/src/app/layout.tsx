import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MedWell - Your Trusted Online Pharmacy',
  description: 'Get genuine medicines delivered to your doorstep. Licensed pharmacy with prescription verification, fast delivery, and secure payments.',
  keywords: 'online pharmacy, medicines, healthcare, prescription, delivery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#102a43" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
