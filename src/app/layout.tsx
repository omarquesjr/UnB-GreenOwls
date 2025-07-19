import './globals.css'
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron'
})

export const metadata: Metadata = {
  title: 'UnB Green Owls - Esports Club',
  description: 'Clube de esportes eletrônicos da Universidade de Brasília',
  keywords: ['esports', 'gaming', 'university', 'brasilia', 'league of legends', 'valorant', 'cs2'],
  authors: [{ name: 'UnB Green Owls' }],
  icons: {
    icon: '/images/green-owls.png',
    shortcut: '/images/green-owls.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'UnB Green Owls - Esports Club',
    description: 'Clube de esportes eletrônicos da Universidade de Brasília',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/green-owls.png',
        width: 1440,
        height: 1440,
        alt: 'UnB Green Owls Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${orbitron.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-slate-900 font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
