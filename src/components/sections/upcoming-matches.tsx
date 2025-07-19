'use client'

export default function UpcomingMatches() {
  const matches = [
    {
      id: 1,
      teamA: "Green Owls LoL",
      teamB: "UCB Eagles",
      competition: "CBLOL Academy",
      date: "2025-01-20",
      time: "19:00",
      status: "Próxima"
    },
    {
      id: 2,
      teamA: "Green Owls Valorant",
      teamB: "UnB Black Hawks",
      competition: "Campus Championship",
      date: "2025-01-22",
      time: "20:30",
      status: "Próxima"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
          Próximas <span className="text-green-400">Partidas</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Acompanhe quando nossos times entram em ação
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches.map((match) => (
          <div 
            key={match.id}
            className="gaming-card p-6 rounded-xl hover:neon-border transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                {match.status}
              </span>
              <span className="text-gray-400 text-sm">{match.competition}</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <h3 className="text-white font-semibold">{match.teamA}</h3>
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mt-2">
                  <span className="text-green-400 font-bold">GO</span>
                </div>
              </div>
              
              <div className="text-center px-4">
                <span className="text-gray-300 text-2xl font-bold">VS</span>
              </div>
              
              <div className="text-center">
                <h3 className="text-white font-semibold">{match.teamB}</h3>
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mt-2">
                  <span className="text-gray-300 font-bold">?</span>
                </div>
              </div>
            </div>

            <div className="text-center border-t border-slate-700 pt-4">
              <p className="text-gray-300">
                {new Date(match.date).toLocaleDateString('pt-BR')} às {match.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
