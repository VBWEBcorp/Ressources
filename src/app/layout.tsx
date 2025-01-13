import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VBWEB - Consultant Marketing Digital',
  description: 'Expert en développement web, SEO et solutions digitales sur mesure.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-[#264060]`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
