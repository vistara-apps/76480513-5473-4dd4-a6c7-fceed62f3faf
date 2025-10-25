import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Propsperity - Fractional Real Estate on Base',
  description: 'Democratize access to high-value real estate through fractional NFT ownership',
  openGraph: {
    title: 'Propsperity',
    description: 'Fractional real estate ownership on Base, powered by Farcaster',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
