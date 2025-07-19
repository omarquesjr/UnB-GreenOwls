'use client'

export default function TeamsSection() {
  const teams = [
    {
      id: 1,
      name: "League of Legends",
      description: "Nossa principal equipe compete no CBLOL Academy",
      playerCount: 8,
      achievements: "Campeões 2024"
    },
    {
      id: 2,
      name: "Valorant",
      description: "Time focado em crescimento e desenvolvimento",
      playerCount: 6,
      achievements: "3º lugar Regional"
    },
    {
      id: 3,
      name: "CS2",
      description: "Veteranos do Counter-Strike competitivo",
      playerCount: 7,
      achievements: "Semifinalistas"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
          Nossos <span className="text-green-400">Times</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Conheça as modalidades onde competimos e nossos atletas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div 
            key={team.id}
            className="gaming-card p-6 rounded-xl hover:neon-border transition-all duration-300 text-center"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-400 font-bold text-xl">GO</span>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">{team.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{team.description}</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Atletas:</span>
                <span className="text-green-400">{team.playerCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Conquista:</span>
                <span className="text-green-400">{team.achievements}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
