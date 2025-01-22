import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Disha Dutta - Portfolio',
  description:
    'Portfolio of Disha Dutta, created using next.js and tailwind css',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className='font-serif flex flex-col'>
        <ThemeProvider>
          <div className='fixed top-0 left-0 w-full z-50 bg-inherit xl:px-96 md:px-40 sm:px-28 px-3 lg:px-50'>
            <Navbar />
          </div>
          <div className='pt-28 xl:px-96 md:px-40 sm:px-28 px-3 lg:px-50 z-0'>
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
