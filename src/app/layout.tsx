import type { Metadata } from "next"
import { Open_Sans, Roboto_Condensed } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
})

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Green Owls - eSports UnB",
  description: "Equipe de eSports da Universidade de Brasília",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${openSans.variable} ${robotoCondensed.variable}`}>
      <body>
        <div className="wrapper">
          <Header />
          <main className="site-content">
            {children}
          </main>
          <footer className="alc-footer">
            <div className="alc-footer__widgets">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="alc-widget">
                      <h5 className="alc-widget__title">Sobre os Green Owls</h5>
                      <p>
                        Somos uma equipe de eSports da Universidade de Brasília, 
                        dedicada à excelência competitiva e ao desenvolvimento de 
                        talentos no cenário dos jogos eletrônicos.
                      </p>
                      <div className="alc-social-links">
                        <a href="#" className="alc-social-link">Discord</a>
                        <a href="#" className="alc-social-link">X</a>
                        <a href="#" className="alc-social-link">Twitch</a>
                        <a href="#" className="alc-social-link">IG</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="alc-widget">
                      <h5 className="alc-widget__title">Links Rápidos</h5>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '8px' }}>
                          <a href="/equipe" style={{ color: '#999', fontSize: '14px' }}>Nossa Equipe</a>
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                          <a href="/partidas" style={{ color: '#999', fontSize: '14px' }}>Partidas</a>
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                          <a href="/noticias" style={{ color: '#999', fontSize: '14px' }}>Notícias</a>
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                          <a href="/contato" style={{ color: '#999', fontSize: '14px' }}>Contato</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="alc-widget">
                      <h5 className="alc-widget__title">Contato</h5>
                      <div style={{ color: '#999', fontSize: '14px' }}>
                        <p>Universidade de Brasília<br />Campus Darcy Ribeiro</p>
                        <p>Email: greenowls@unb.br</p>
                        <p>Discord: Green Owls UnB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="alc-footer__copyright">
              <div className="container">
                <p>&copy; 2024 Green Owls eSports. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
