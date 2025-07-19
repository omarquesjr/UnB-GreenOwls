'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function FeaturedNews() {
  const news = [
    {
      id: 1,
      title: "Green Owls conquista primeiro lugar no CBLOL Academy",
      subtitle: "Time de League of Legends faz história na competição universitária",
      category: "LoL",
      date: "2025-01-15",
      image: "/images/news-1.jpg"
    },
    {
      id: 2,
      title: "Nova lineup de Valorant revelada para 2025",
      subtitle: "Conheça os novos talentos que representarão a UnB",
      category: "Valorant",
      date: "2025-01-10",
      image: "/images/news-2.jpg"
    },
    {
      id: 3,
      title: "Parceria com patrocinadores garante novos equipamentos",
      subtitle: "Investimento em hardware de última geração para nossos atletas",
      category: "Anúncios",
      date: "2025-01-08",
      image: "/images/news-3.jpg"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
          Últimas <span className="text-green-400">Notícias</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Fique por dentro de tudo que acontece no mundo dos Green Owls
        </p>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article) => (
          <article 
            key={article.id}
            className="gaming-card rounded-xl overflow-hidden group hover:neon-border transition-all duration-300"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-800/80 flex items-center justify-center">
                <span className="text-green-400 font-semibold">{article.category}</span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>5 min</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-200">
                {article.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {article.subtitle}
              </p>

              <Button 
                variant="ghost" 
                className="w-full justify-between text-green-400 hover:bg-green-500/10 group"
                asChild
              >
                <Link href={`/noticias/${article.id}`}>
                  Ler mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Button 
          variant="outline" 
          size="lg"
          className="border-green-500/30 text-green-400 hover:bg-green-500/10"
          asChild
        >
          <Link href="/noticias">
            Ver todas as notícias
          </Link>
        </Button>
      </div>
    </div>
  )
}
