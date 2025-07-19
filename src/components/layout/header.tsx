'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { GreenOwlsLogo } from '@/components/ui/logo'
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
  Bell
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
    <header className="bg-background/95 backdrop-blur-strong border-b border-green-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-800 text-sm">
          <div className="flex items-center space-x-4 text-gray-400">
            <span>UnB Esports Club</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Brasília, DF</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-400 w-8 h-8">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-400 w-8 h-8">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <GreenOwlsLogo 
                width={48} 
                height={48} 
                className="neon-border rounded-lg p-1 group-hover:animate-pulse-glow transition-all"
              />
            </div>
            <div className="hidden lg:block">
              <div className="text-white font-gaming text-xl text-gradient">GREEN OWLS</div>
              <div className="text-green-400 text-xs font-medium uppercase tracking-wider">University of Brasília</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center space-x-2 font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="uppercase tracking-wide text-sm">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side - Cart & Auth */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Shopping Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-300 hover:text-green-400 gaming-card w-10 h-10 rounded-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </Button>
            
            {/* Divider */}
            <div className="w-px h-6 bg-gray-700"></div>
            
            {/* Auth Buttons */}
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-green-400 font-medium uppercase tracking-wide text-sm"
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            
            <Button
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-gaming px-6 py-2 text-sm neon-border"
            >
              Join Team
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-green-400 gaming-card w-10 h-10 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="gaming-card p-4 mt-2 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-green-400 block px-3 py-3 rounded-lg hover:bg-green-500/10 transition-colors duration-200 flex items-center space-x-3 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="uppercase tracking-wide">{item.name}</span>
                </Link>
              ))}
              
              <div className="border-t border-gray-700 pt-4 mt-4 space-y-3">
                <Button
                  variant="ghost"
                  className="w-full text-gray-300 hover:text-green-400 font-medium justify-start"
                >
                  <User className="w-4 h-4 mr-3" />
                  Login
                </Button>
                
                <Button
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-gaming"
                >
                  Join Team
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
