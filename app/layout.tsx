import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Student Portfolio',
  description: 'Created by Yuri Egipto',
  generator: 'yuri',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
