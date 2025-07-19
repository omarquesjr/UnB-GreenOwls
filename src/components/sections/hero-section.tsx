'use client'

import { Button } from '@/components/ui/button'
import { Play, Trophy, Users, Target } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gaming Pattern */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Animation */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center neon-border animate-pulse">
              <span className="text-white font-bold text-4xl font-display">GO</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              UnB Green Owls
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-400 mb-4 font-medium">
            Clube de Esports da Universidade de Brasília
          </p>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Somos mais que um time, somos uma família unida pela paixão pelos esportes eletrônicos. 
            Junte-se à nossa jornada rumo ao topo do cenário competitivo brasileiro.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="gaming" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto group"
              asChild
            >
              <Link href="/times">
                <Users className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Conheça Nossos Times
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-green-500/30 text-green-400 hover:bg-green-500/10 group"
              asChild
            >
              <Link href="/competicoes">
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Assista aos Jogos
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="gaming-card p-6 rounded-xl">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">15+</h3>
              <p className="text-gray-300">Campeonatos Disputados</p>
            </div>
            
            <div className="gaming-card p-6 rounded-xl">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">50+</h3>
              <p className="text-gray-300">Atletas Ativos</p>
            </div>
            
            <div className="gaming-card p-6 rounded-xl">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">5</h3>
              <p className="text-gray-300">Modalidades</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute top-32 right-20 w-6 h-6 bg-emerald-500 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-300 rounded-full animate-bounce opacity-25"></div>
      <div className="absolute bottom-32 right-10 w-5 h-5 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
    </section>
  )
}
