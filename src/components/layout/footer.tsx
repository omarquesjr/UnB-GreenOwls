'use client'

import Link from 'next/link'
import { 
  Twitter, 
  Instagram, 
  Youtube, 
  Twitch,
  Mail,
  MapPin
} from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'Twitch', href: '#', icon: Twitch },
  ]

  const quickLinks = [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Times', href: '/times' },
    { name: 'Competições', href: '/competicoes' },
    { name: 'Notícias', href: '/noticias' },
  ]

  const supportLinks = [
    { name: 'Contato', href: '/contato' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Suporte', href: '/suporte' },
    { name: 'Política de Privacidade', href: '/privacidade' },
  ]

  return (
    <footer className="bg-slate-950 border-t border-green-500/20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-display">GO</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl font-display">Green Owls</span>
                <p className="text-green-400 text-xs font-medium">UnB Esports</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Clube de esportes eletrônicos da Universidade de Brasília, 
              promovendo excelência competitiva e união entre gamers.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-sm">Campus Darcy Ribeiro, UnB - Brasília, DF</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4 text-green-400" />
              <span className="text-sm">contato@unbgreenowls.com.br</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 font-display">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 font-display">Suporte</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 font-display">Conecte-se</h3>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-green-400" />
                </Link>
              ))}
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">
                Receba novidades e atualizações sobre nossos times e competições.
              </p>
              
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-r-lg transition-colors duration-200 text-sm font-medium">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 UnB Green Owls. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/termos" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Privacidade
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
