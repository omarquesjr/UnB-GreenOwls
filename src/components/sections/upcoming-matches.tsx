'use client'

import { Calendar, Clock, MapPin, Eye, Trophy, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GreenOwlsLogo } from '@/components/ui/logo'

export default function UpcomingMatches() {
  const matches = [
    {
      id: 1,
      teamA: {
        name: "Green Owls",
        logo: "GO",
        country: "Brasil",
        record: "12-3"
      },
      teamB: {
        name: "UCB Eagles", 
        logo: "UCB",
        country: "Brasil",
        record: "8-7"
      },
      competition: {
        name: "CBLOL Academy",
        stage: "Playoffs - Semifinal"
      },
      date: "2025-01-20",
      time: "19:00",
      venue: "Arena UnB",
      status: "Próxima",
      viewers: "2.5k",
      game: "League of Legends"
    },
    {
      id: 2,
      teamA: {
        name: "Green Owls",
        logo: "GO", 
        country: "Brasil",
        record: "15-2"
      },
      teamB: {
        name: "Black Hawks",
        logo: "BH",
        country: "Brasil", 
        record: "10-5"
      },
      competition: {
        name: "Campus Championship",
        stage: "Final"
      },
      date: "2025-01-22", 
      time: "20:30",
      venue: "Online",
      status: "Próxima",
      viewers: "1.8k",
      game: "Valorant"
    }
  ]

  const lastResult = {
    teamA: {
      name: "Green Owls",
      logo: "GO",
      score: 2
    },
    teamB: {
      name: "L.A. Pirates", 
      logo: "LAP",
      score: 1
    },
    competition: "Pro League - World Championship",
    game: "Valorant",
    date: "2025-01-15",
    stats: {
      totalKills: ["56", "40"],
      totalDeaths: ["23", "38"],
      totalAssists: ["14", "6"],
      pentakills: ["19", "12"]
    },
    mvp: {
      name: "Destroy Spiegel",
      team: "Green Owls",
      kills: 37,
      deaths: 2,
      assists: 9,
      pentakills: 13
    }
  }

  return (
    <div className="space-y-12">
      {/* Last Game Result - Featured */}
      <div className="esports-section py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-gaming text-white mb-2">
              ÚLTIMO RESULTADO
            </h2>
            <p className="text-green-400 font-medium uppercase tracking-wider text-sm">
              {lastResult.competition}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="match-card p-8 rounded-xl">
              {/* Match Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                  {lastResult.game}
                </div>
                <div className="text-gray-400 text-sm">
                  {new Date(lastResult.date).toLocaleDateString('pt-BR')}
                </div>
              </div>

              {/* Teams & Score */}
              <div className="grid grid-cols-3 gap-8 items-center mb-8">
                {/* Team A */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 neon-border p-2">
                    <GreenOwlsLogo width={60} height={60} />
                  </div>
                  <h3 className="text-white font-gaming text-lg mb-1">{lastResult.teamA.name}</h3>
                  <p className="text-gray-400 text-sm">Brasil</p>
                </div>

                {/* Score */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <span className="text-4xl font-gaming text-gradient">{lastResult.teamA.score}</span>
                    <span className="text-gray-500">-</span>
                    <span className="text-4xl font-gaming text-gray-400">{lastResult.teamB.score}</span>
                  </div>
                  <Button variant="ghost" className="text-green-400 hover:text-green-300">
                    <Eye className="w-4 h-4 mr-2" />
                    Watch Replay
                  </Button>
                </div>

                {/* Team B */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-300 font-gaming text-xl">{lastResult.teamB.logo}</span>
                  </div>
                  <h3 className="text-white font-gaming text-lg mb-1">{lastResult.teamB.name}</h3>
                  <p className="text-gray-400 text-sm">Brasil</p>
                </div>
              </div>

              {/* Match Statistics */}
              <div className="border-t border-gray-700 pt-6 mb-6">
                <h4 className="text-white font-gaming text-center mb-4">ESTATÍSTICAS DA PARTIDA</h4>
                <div className="grid grid-cols-4 gap-4 text-center">
                  {Object.entries(lastResult.stats).map(([stat, values], index) => (
                    <div key={stat} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="stat-highlight">{values[0]}</span>
                        <span className="text-gray-400">{values[1]}</span>
                      </div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide">
                        {stat.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* MVP */}
              <div className="border-t border-gray-700 pt-6">
                <div className="text-center">
                  <p className="text-green-400 font-gaming text-sm mb-2">MATCH MVP</p>
                  <h4 className="text-white font-gaming text-lg mb-4">{lastResult.mvp.name}</h4>
                  <div className="flex justify-center space-x-6 text-sm">
                    <div>
                      <span className="stat-highlight">{lastResult.mvp.kills}</span>
                      <p className="text-gray-400">Kills</p>
                    </div>
                    <div>
                      <span className="stat-highlight">{lastResult.mvp.deaths}</span>
                      <p className="text-gray-400">Deaths</p>
                    </div>
                    <div>
                      <span className="stat-highlight">{lastResult.mvp.assists}</span>
                      <p className="text-gray-400">Assists</p>
                    </div>
                    <div>
                      <span className="stat-highlight">{lastResult.mvp.pentakills}</span>
                      <p className="text-gray-400">Pentakills</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Matches */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-gaming text-white mb-2">
            PRÓXIMAS <span className="text-gradient">PARTIDAS</span>
          </h2>
          <p className="text-gray-400">
            Acompanhe quando nossos times entram em ação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {matches.map((match) => (
            <div 
              key={match.id}
              className="match-card p-6 rounded-xl group hover:scale-105 transition-all duration-300"
            >
              {/* Match Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                  <div className="text-green-400 font-gaming text-sm">{match.competition.name}</div>
                  <div className="text-gray-400 text-xs">{match.competition.stage}</div>
                </div>
                <div className="text-right space-y-1">
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                    {match.status.toUpperCase()}
                  </div>
                  <div className="text-gray-400 text-xs">{match.game}</div>
                </div>
              </div>

              {/* Teams */}
              <div className="grid grid-cols-3 gap-4 items-center mb-6">
                {/* Team A */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 neon-border p-1">
                    <GreenOwlsLogo width={48} height={48} />
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">{match.teamA.name}</h4>
                  <p className="text-gray-400 text-xs">{match.teamA.record}</p>
                </div>
                
                {/* VS */}
                <div className="text-center">
                  <div className="text-gray-400 font-gaming text-lg">VS</div>
                </div>
                
                {/* Team B */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gray-300 font-gaming">{match.teamB.logo}</span>
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">{match.teamB.name}</h4>
                  <p className="text-gray-400 text-xs">{match.teamB.record}</p>
                </div>
              </div>

              {/* Match Info */}
              <div className="border-t border-gray-700 pt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(match.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {match.time}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {match.venue}
                  </div>
                  <div className="flex items-center text-green-400">
                    <Eye className="w-4 h-4 mr-2" />
                    {match.viewers} viewers
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
