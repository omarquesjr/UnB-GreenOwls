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
  openGraph: {
    title: 'UnB Green Owls - Esports Club',
    description: 'Clube de esportes eletrônicos da Universidade de Brasília',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${orbitron.variable}`}>
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
