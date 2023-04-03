import './globals.css'
import { Space_Grotesk } from 'next/font/google'

export const metadata = {
  title: 'Daif | Games Hub',
  description: 'Created by Daif with Next.js and firebase',
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

import NavBar from '@/app/nav.bar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ spaceGrotesk.className }>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
