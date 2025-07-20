'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User,
  Trophy,
  Newspaper,
  Users,
  Store,
  Search,
  Bell,
  Instagram
} from 'lucide-react'

// Importando ícones customizados para TikTok, Twitch, Discord e X
const TikTokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const TwitchIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
  </svg>
)

const DiscordIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
  </svg>
)

const XIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Início', href: '/', icon: Trophy },
    { name: 'Notícias', href: '/noticias', icon: Newspaper },
    { name: 'Times', href: '/times', icon: Users },
    { name: 'Competições', href: '/competicoes', icon: Trophy },
    { name: 'Loja', href: '/loja', icon: Store },
  ]

  return (
    <>
      {/* Header Mobile */}
      <div className="header-mobile clearfix md:hidden" id="header-mobile">
        <div className="header-mobile__logo">
          <Link href="/">
            <Image 
              src="/images/green-owls.png" 
              alt="Green Owls" 
              width={120}
              height={40}
              className="header-mobile__logo-img"
            />
          </Link>
        </div>
        <div className="header-mobile__inner">
          <button 
            id="header-mobile__toggle" 
            className="burger-menu-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="burger-menu-icon__line"></span>
          </button>
          <span className="header-mobile__search-icon" id="header-mobile__search-icon"></span>
        </div>
      </div>

      {/* Header Desktop */}
      <header className="header header--layout-3">
        {/* Header Top Bar */}
        <div className="header__top-bar clearfix">
          <div className="container">
            <div className="header__top-bar-inner">
              {/* Social Links */}
              <ul className="social-links social-links--inline social-links--main-nav social-links--top-bar">
                <li className="social-links__item">
                  <a href="#" className="social-links__link" title="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                </li>
                <li className="social-links__item">
                  <a href="#" className="social-links__link" title="TikTok">
                    <TikTokIcon />
                  </a>
                </li>
                <li className="social-links__item">
                  <a href="#" className="social-links__link" title="Twitch">
                    <TwitchIcon />
                  </a>
                </li>
                <li className="social-links__item">
                  <a href="#" className="social-links__link" title="Discord">
                    <DiscordIcon />
                  </a>
                </li>
                <li className="social-links__item">
                  <a href="#" className="social-links__link" title="X">
                    <XIcon />
                  </a>
                </li>
              </ul>

              {/* Account Navigation */}
              <ul className="nav-account">
                <li className="nav-account__item">
                  <a href="https://unb.br" target="_blank" rel="noopener noreferrer">Universidade de Brasília</a>
                </li>
                <li className="nav-account__item">
                  <a href="/conta">Sua Conta</a>
                </li>
                <li className="nav-account__item nav-account__item--logout">
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Header Primary */}
        <div className="header__primary">
          <div className="container">
            <div className="header__primary-inner">
              {/* Main Navigation - Toda à esquerda */}
              <nav className="main-nav main-nav--left">
                <ul className="main-nav__list">
                  <li className="active"><Link href="/">Home</Link></li>
                  <li><Link href="/equipe">Equipe</Link></li>
                  <li><Link href="/partidas">Partidas</Link></li>
                  <li><Link href="/noticias">Notícias</Link></li>
                  <li><Link href="/sobre">Sobre</Link></li>
                  <li><Link href="/contato">Contato</Link></li>
                </ul>
              </nav>

              {/* Header Logo - Centralizada */}
              <div className="header-logo">
                <Link href="/">
                  <Image 
                    src="/images/green-owls.png" 
                    alt="Green Owls" 
                    width={280}
                    height={140}
                    className="header-logo__img"
                  />
                </Link>
              </div>

              {/* Header Right - Busca e Carrinho */}
              <div className="header__right">
                <div className="header__search">
                  <input type="text" placeholder="Buscar..." />
                  <button type="submit">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
                <Link href="/loja" className="header__cart">
                  <ShoppingCart className="w-4 h-4" />
                  Loja
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="mobile-nav-overlay md:hidden">
          <div className="mobile-nav-content">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="mobile-nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
