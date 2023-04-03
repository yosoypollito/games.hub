import './globals.css'
import { Space_Grotesk } from 'next/font/google'

export const metadata = {
  title: 'Daif | Games Hub',
  description: 'Created by Daif with Next.Js and firebase',
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

import ThemeButton from '@/app/theme.button'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ spaceGrotesk.className }>
        <ThemeButton/>
        {children}
      </body>
    </html>
  )
}
