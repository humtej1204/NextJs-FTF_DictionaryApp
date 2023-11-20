import type { Metadata } from 'next';
import { inter } from '@/utils/fonts/fonts'
import './globals.scss';
import Header from '@/shared/components/header/header.component';
import { PopupProvider } from '@/shared/context/popup/popup.context';

export const metadata: Metadata = {
  title: 'Dictionary App',
  description: 'Immerse yourself in the richness of language with our online dictionary. Explore precise definitions, discover vibrant synonyms, and expand your vocabulary with an easy-to-use tool. Dictionary App is your linguistic guide, where each word comes to life. Explore, learn, and fall in love with the wonders of our language.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PopupProvider>
          <Header />
          {children}
        </ PopupProvider>
      </body>
    </html>
  )
}
