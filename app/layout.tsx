import type { Metadata } from 'next'
import { Ubuntu, Kalam } from 'next/font/google'
import './globals.css'

export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export const kalam = Kalam({
  subsets: ['latin'],
  weight: ['700'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} `}>{children}</body>
    </html>
  )
}
