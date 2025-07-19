'use client'

import Link from 'next/link'
import { 
  Twitter, 
  Instagram, 
  Youtube, 
  Twitch,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Trophy,
  Users,
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GreenOwlsLogo } from '@/components/ui/logo'

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'Twitch', href: '#', icon: Twitch },
  ]

  const usefulLinks = [
    { name: 'Home', href: '/' },
    { name: 'News Page', href: '/noticias' },
    { name: 'Teams', href: '/times' },
    { name: 'Tournament', href: '/competicoes' },
    { name: 'Player Bio', href: '/players' },
    { name: 'Match Stats', href: '/estatisticas' },
    { name: 'Live Stream', href: '/stream' },
    { name: 'Gallery', href: '/galeria' },
    { name: 'Videos', href: '/videos' },
    { name: 'Merchandise', href: '/loja' },
  ]

  const aboutLinks = [
    { name: 'Contact', href: '/contato' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Sponsors', href: '/patrocinadores' },
    { name: 'Next Events', href: '/eventos' },
    { name: 'Guides', href: '/guias' },
    { name: 'Register/Login', href: '/login' },
    { name: 'Privacy Policy', href: '/privacidade' },
  ]

  const streamers = [
    { name: 'The Destroy', href: '/streamers/destroy' },
    { name: 'FayeDaBebop', href: '/streamers/faye' },
    { name: 'Crazzzy_80', href: '/streamers/crazy' },
    { name: 'Game Huntress', href: '/streamers/huntress' },
    { name: 'Logan-X', href: '/streamers/logan' },
    { name: 'Kelly_Spiegel9', href: '/streamers/kelly' },
  ]

  const popularNews = [
    {
      title: "Green Owls conquista primeiro lugar no CBLOL Academy",
      category: "THE TEAM",
      date: "2025-01-15"
    },
    {
      title: "Nova lineup de Valorant revelada para 2025",
      category: "VALORANT",
      date: "2025-01-12"
    }
  ]

  const featuredNews = [
    {
      title: "Parceria com patrocinadores garante novos equipamentos",
      category: "BREAKING NEWS",
      date: "2025-01-10"
    },
    {
      title: "Workshop de coaching: melhorando performance individual",
      category: "TRAINING",
      date: "2025-01-08"
    }
  ]

  return (
    <footer className="bg-background border-t border-green-500/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <GreenOwlsLogo 
                width={64} 
                height={64} 
                className="neon-border rounded-lg p-2 group-hover:animate-pulse-glow transition-all"
              />
              <div>
                <div className="text-white font-gaming text-2xl text-gradient">GREEN OWLS</div>
                <div className="text-green-400 text-sm font-medium uppercase tracking-wider">University of Brasília</div>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              O clube de eSports oficial da Universidade de Brasília. O maior do Centro-Oeste.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">Campus Darcy Ribeiro, UnB - Brasília, DF</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">contato@unbgreenowls.com.br</span>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">+55 (61) 3107-0000</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-white font-gaming text-sm uppercase tracking-wide">Follow Our Profile</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 gaming-card rounded-lg flex items-center justify-center transition-all duration-300 group hover:neon-border"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-gray-300 group-hover:text-green-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-white font-gaming text-lg uppercase tracking-wide">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Streams */}
          <div className="space-y-4">
            <h3 className="text-white font-gaming text-lg uppercase tracking-wide">
              Streams
            </h3>
            <ul className="space-y-2">
              {streamers.map((streamer) => (
                <li key={streamer.name}>
                  <Link 
                    href={streamer.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {streamer.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-white font-gaming text-lg uppercase tracking-wide">
              About Us
            </h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News Columns */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-white font-gaming text-lg uppercase tracking-wide">
                Popular News
              </h3>
              {popularNews.map((news, index) => (
                <article key={index} className="space-y-2">
                  <div className="text-green-400 text-xs font-gaming uppercase tracking-wide">
                    {news.category}
                  </div>
                  <h4 className="text-white text-sm font-medium hover:text-green-400 transition-colors cursor-pointer line-clamp-2">
                    {news.title}
                  </h4>
                  <div className="text-gray-400 text-xs">
                    {new Date(news.date).toLocaleDateString('pt-BR')}
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-gaming text-lg uppercase tracking-wide">
                Featured News
              </h3>
              {featuredNews.map((news, index) => (
                <article key={index} className="space-y-2">
                  <div className="text-green-400 text-xs font-gaming uppercase tracking-wide">
                    {news.category}
                  </div>
                  <h4 className="text-white text-sm font-medium hover:text-green-400 transition-colors cursor-pointer line-clamp-2">
                    {news.title}
                  </h4>
                  <div className="text-gray-400 text-xs">
                    {new Date(news.date).toLocaleDateString('pt-BR')}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              <p>&copy; 2025 UnB Green Owls Esports Club. Todos os direitos reservados.</p>
              <p className="mt-1">Desenvolvido com 💚 pela equipe Green Owls</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Trophy className="w-4 h-4 text-green-400" />
                  <span>15+ Competições</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-green-400" />
                  <span>50+ Players</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <span>Desde 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
