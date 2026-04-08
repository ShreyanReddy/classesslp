import type { Metadata } from 'next'
import './globals.css'
import '../styles/animations.css'

export const metadata: Metadata = {
  title: "Classess — The World's Most Advanced School Intelligence Platform",
  description: "Extraordinary schools run on Classess. Predictive intelligence, seamless execution, and the world's most confident performance guarantee.",
  keywords: 'school intelligence platform, AI education, K-12, predictive analytics, school performance',
  openGraph: {
    title: 'Classess — Extraordinary Schools Run On Classess',
    description: 'The world\'s most advanced school intelligence platform. Prediction. Prevention. Execution. Guaranteed.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
