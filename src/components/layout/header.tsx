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
  Facebook,
  Twitter,
  Youtube,
  Instagram
} from 'lucide-react'

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
                  <a href="#" className="social-links__link" title="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                </li>
                <li className="social-links__item">
                  <a href="#" className="social-links__link" title="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                </li>
                <li className="social-links__item">
                  <a href="#" className="social-links__link" title="YouTube">
                    <Youtube className="w-4 h-4" />
                  </a>
                </li>
                <li className="social-links__item">
                  <a href="#" className="social-links__link" title="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                </li>
              </ul>

              {/* Account Navigation */}
              <ul className="nav-account">
                <li className="nav-account__item">
                  <a href="#">UnB Esports Club</a>
                </li>
                <li className="nav-account__item">
                  <a href="#">Brasília, DF</a>
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
