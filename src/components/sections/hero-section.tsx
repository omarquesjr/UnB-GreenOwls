'use client'

import { Button } from '@/components/ui/button'
import { GreenOwlsLogo } from '@/components/ui/logo'
import { Play, Trophy, Users, Target, ArrowRight, Gamepad2 } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gaming Pattern */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-green-500/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tl from-emerald-500/10 to-transparent blur-3xl"></div>
        </div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
              <Gamepad2 className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium uppercase tracking-wider">Esports UnB</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-gaming text-white leading-tight">
                <span className="block text-gradient">GREEN</span>
                <span className="block">OWLS</span>
              </h1>
              
              <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              O maior clube de esports da <span className="text-green-400 font-semibold">Universidade de Brasília</span>. 
              Unidos pela paixão, forjados pela competição.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-gaming px-8 py-6 text-base group neon-border"
                asChild
              >
                <Link href="/times">
                  Nossos Times
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-500/30 text-green-400 hover:bg-green-500/10 backdrop-blur-sm px-8 py-6 text-base group"
                asChild
              >
                <Link href="/competicoes">
                  <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Live Stream
                </Link>
              </Button>
            </div>

            {/* Achievement Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-gaming text-gradient mb-1">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Competições</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-gaming text-gradient mb-1">50+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-gaming text-gradient mb-1">5</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Modalidades</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative lg:block hidden">
            {/* Main Owl Logo/Emblem */}
            <div className="relative mx-auto w-80 h-80">
              <div className="absolute inset-0 gaming-card rounded-full flex items-center justify-center animate-pulse-glow">
                <div className="w-64 h-64 rounded-full flex items-center justify-center relative p-4">
                  <GreenOwlsLogo 
                    width={240} 
                    height={240} 
                    className="animate-float"
                  />
                  
                  {/* Orbit rings */}
                  <div className="absolute inset-0 border-2 border-green-400/30 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
                  <div className="absolute inset-4 border border-green-400/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                </div>
              </div>
              
              {/* Floating Game Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 gaming-card rounded-lg flex items-center justify-center">
                <Trophy className="w-8 h-8 text-green-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 gaming-card rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 gaming-card rounded-lg flex items-center justify-center">
                <Target className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-emerald-500 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-green-300 rounded-full animate-bounce opacity-50"></div>
      <div className="absolute bottom-32 right-10 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse opacity-70"></div>
    </section>
  )
}
