'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, MessageCircle, Eye, Share2, User } from 'lucide-react'

export default function FeaturedNews() {
  const featuredNews = {
    id: 1,
    title: "Green Owls conquista primeiro lugar no CBLOL Academy",
    subtitle: "Time de League of Legends faz história na competição universitária brasileira após vitória épica contra os favoritos",
    category: "THE TEAM",
    game: "LEAGUE OF LEGENDS",
    date: "2025-01-15",
    author: "Eric Rodgers",
    avatar: "/images/avatar-1.jpg",
    readTime: "5 min",
    views: "2369",
    likes: "530",
    comments: "18",
    image: "/images/news-featured.jpg"
  }

  const recentNews = [
    {
      id: 2,
      title: "Nova lineup de Valorant revelada para 2025",
      subtitle: "Conheça os novos talentos que representarão a UnB nos principais campeonatos",
      category: "VALORANT",
      date: "2025-01-12",
      author: "Lagertha Dax",
      avatar: "/images/avatar-2.jpg",
      views: "1850",
      likes: "412",
      comments: "25"
    },
    {
      id: 3,
      title: "Parceria com patrocinadores garante novos equipamentos",
      subtitle: "Investimento em hardware de última geração para nossos atletas competitivos",
      category: "BREAKING NEWS",
      date: "2025-01-10",
      author: "Eric Rodgers",
      avatar: "/images/avatar-1.jpg",
      views: "3200",
      likes: "680",
      comments: "42"
    },
    {
      id: 4,
      title: "Green Owls anuncia calendário de eventos para 2025",
      subtitle: "Confira todas as competições e eventos que teremos durante o ano",
      category: "ANNOUNCEMENTS",
      date: "2025-01-08",
      author: "Lagertha Dax",
      avatar: "/images/avatar-2.jpg",
      views: "1450",
      likes: "320",
      comments: "15"
    },
    {
      id: 5,
      title: "Workshop de coaching: melhorando performance individual",
      subtitle: "Sessão especial com coaches profissionais para desenvolvimento dos jogadores",
      category: "TRAINING",
      date: "2025-01-05",
      author: "Eric Rodgers", 
      avatar: "/images/avatar-1.jpg",
      views: "980",
      likes: "180",
      comments: "8"
    }
  ]

  const trendingTopics = [
    { tag: "XENOWATCH", count: 12 },
    { tag: "THE TEAM", count: 8 },
    { tag: "L.O. HEROES", count: 6 },
    { tag: "STRIKER GO", count: 4 }
  ]

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-gaming text-white mb-2">
          ÚLTIMAS <span className="text-gradient">NOTÍCIAS</span>
        </h2>
        <p className="text-gray-400">
          Fique por dentro de tudo que acontece no mundo dos Green Owls
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Featured Article */}
        <div className="lg:col-span-2">
          <article className="news-card rounded-xl overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-80 bg-gradient-to-br from-green-500/20 via-emerald-500/15 to-blue-500/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Category Badges */}
              <div className="absolute top-4 left-4 space-x-2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-gaming uppercase tracking-wide">
                  {featuredNews.category}
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-gaming uppercase tracking-wide">
                  {featuredNews.game}
                </span>
              </div>

              {/* Article Meta in Image */}
              <div className="absolute bottom-4 left-4 right-4">
                <h1 className="text-2xl md:text-3xl font-gaming text-white mb-2 leading-tight">
                  {featuredNews.title}
                </h1>
                <p className="text-gray-200 mb-4 line-clamp-2">
                  {featuredNews.subtitle}
                </p>
              </div>
            </div>

            {/* Article Footer */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-gaming text-sm">{featuredNews.author}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(featuredNews.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {featuredNews.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center space-x-4 text-sm">
                  <span className="stat-highlight">{featuredNews.views}</span>
                  <span className="flex items-center text-gray-400">
                    <Eye className="w-4 h-4 mr-1" />
                    {featuredNews.views}
                  </span>
                  <span className="stat-highlight">{featuredNews.likes}</span>
                  <span className="stat-highlight">{featuredNews.comments}</span>
                </div>
              </div>

              <Button 
                className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-gaming"
                asChild
              >
                <Link href={`/noticias/${featuredNews.id}`}>
                  LER MATÉRIA COMPLETA
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Recent News */}
          <div className="widget-card rounded-xl p-6">
            <h3 className="font-gaming text-white mb-6 text-lg">
              NOTÍCIAS RECENTES
            </h3>
            
            <div className="space-y-4">
              {recentNews.map((article) => (
                <article key={article.id} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-green-400 text-xs font-gaming uppercase tracking-wide">
                          {article.category}
                        </span>
                      </div>
                      
                      <h4 className="text-white font-medium text-sm mb-1 line-clamp-2 hover:text-green-400 transition-colors cursor-pointer">
                        <Link href={`/noticias/${article.id}`}>
                          {article.title}
                        </Link>
                      </h4>
                      
                      <p className="text-gray-400 text-xs mb-2 line-clamp-1">
                        {article.subtitle}
                      </p>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                          <span>•</span>
                          <span>{article.author}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center text-gray-400">
                            <Eye className="w-3 h-3 mr-1" />
                            {article.views}
                          </span>
                          <span className="flex items-center text-gray-400">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            {article.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Button 
              variant="ghost" 
              className="w-full mt-4 text-green-400 hover:bg-green-500/10 font-gaming text-sm"
              asChild
            >
              <Link href="/noticias">
                VER TODAS AS NOTÍCIAS
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Trending Topics */}
          <div className="widget-card rounded-xl p-6">
            <h3 className="font-gaming text-white mb-6 text-lg">
              TÓPICOS EM ALTA
            </h3>
            
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div key={topic.tag} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400 font-gaming text-sm">
                      #{index + 1}
                    </span>
                    <span className="text-white text-sm font-medium">
                      {topic.tag}
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs">
                    {topic.count} posts
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
