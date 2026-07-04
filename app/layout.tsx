import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://xaatim.github.io/hatim-portfolio'
const analyticsEnabled = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true'

export const metadata: Metadata = {
  title: 'Hatim Ahmed Hassan - Robotics & IoT Engineer | xaatim',
  description: 'Hatim Ahmed Hassan (xaatim) - Mechanical Engineer specializing in ROS2, autonomous robotics, and IoT solutions. Founder of Beam Robotics. Building intelligent robots for agriculture, security, and automation.',
  keywords: ['Hatim Ahmed Hassan', 'xaatim', 'Robotics', 'ROS2', 'IoT', 'Autonomous Systems', 'Mechanical Engineering', 'Automation', 'Beam Robotics', 'Computer Vision', 'SLAM', 'Arduino', 'ESP32'],
  authors: [{ name: 'Hatim Ahmed Hassan' }],
  creator: 'Hatim Ahmed Hassan',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Hatim Ahmed Hassan - Robotics & IoT Engineer',
    description: 'Building intelligent autonomous robots and IoT systems. ROS2, Computer Vision, Embedded Systems',
    url: siteUrl,
    siteName: 'Hatim Ahmed Hassan Portfolio',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#0f1419',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider>
          {children}
          {process.env.NODE_ENV === 'production' && analyticsEnabled && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
