import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: "Green Owls Conquista Terceiro Lugar no Campeonato Regional",
      excerpt: "Após uma série de partidas intensas, nossa equipe demonstrou garra e determinação para garantir o pódio no torneio mais importante da temporada.",
      date: "Dezembro 10, 2024",
      image: "/images/green-owls.png",
      category: "Vitórias",
      categoryClass: "posts__cat-label--category-4"
    },
    {
      id: 2,
      title: "Análise Tática: Como Vencemos os Red Hawks",
      excerpt: "Um breakdown completo das estratégias utilizadas na partida decisiva que nos classificou para as finais do campeonato universitário.",
      date: "Dezembro 8, 2024",
      image: "/images/green-owls.png",
      category: "Análises",
      categoryClass: "posts__cat-label--category-2"
    },
    {
      id: 3,
      title: "Novo Patrocinador se Junta aos Green Owls",
      excerpt: "Estamos orgulhosos de anunciar uma nova parceria que fortalecerá nossa presença no cenário competitivo dos eSports.",
      date: "Dezembro 5, 2024",
      image: "/images/green-owls.png",
      category: "Parcerias",
      categoryClass: "posts__cat-label--category-1"
    },
    {
      id: 4,
      title: "Próximas Partidas: Calendário de Dezembro",
      excerpt: "Confira todos os jogos programados para este mês e não perca nenhum momento da ação dos Green Owls nas competições.",
      date: "Dezembro 3, 2024",
      image: "/images/green-owls.png",
      category: "Agenda",
      categoryClass: "posts__cat-label--category-3"
    },
    {
      id: 5,
      title: "Recrutamento Aberto: Junte-se à Nossa Equipe",
      excerpt: "Estamos procurando novos talentos para fortalecer nosso roster. Inscreva-se para os testes e faça parte da família Green Owls.",
      date: "Novembro 28, 2024",
      image: "/images/green-owls.png",
      category: "Recrutamento",
      categoryClass: "posts__cat-label--green-owls"
    }
  ]

  const upcomingMatches = [
    {
      id: 1,
      team1: { name: "Green Owls", logo: "/images/green-owls.png" },
      team2: { name: "Red Hawks", logo: "/images/green-owls.png" },
      date: "15 DEZ",
      time: "19:00",
      tournament: "Liga Universitária"
    },
    {
      id: 2,
      team1: { name: "Blue Tigers", logo: "/images/green-owls.png" },
      team2: { name: "Green Owls", logo: "/images/green-owls.png" },
      date: "22 DEZ",
      time: "18:30",
      tournament: "Copa Regional"
    }
  ]

  return (
    <div className="container">
      {/* Main Content Area */}
      <div className="row" style={{ marginTop: '30px' }}>
        {/* Main Posts Column */}
        <div className="col-lg-8">
          {/* Hero Post */}
          <div className="posts__item" style={{ marginBottom: '40px' }}>
            <div className="posts__thumb">
              <Image
                src={featuredPosts[0].image}
                alt={featuredPosts[0].title}
                width={800}
                height={400}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
            <div className="posts__inner">
              <div className="posts__cat">
                <span className={`label ${featuredPosts[0].categoryClass}`}>
                  {featuredPosts[0].category}
                </span>
              </div>
              <h1 className="posts__title">
                <Link href={`/post/${featuredPosts[0].id}`}>
                  {featuredPosts[0].title}
                </Link>
              </h1>
              <span className="posts__date">{featuredPosts[0].date}</span>
              <p className="posts__excerpt">{featuredPosts[0].excerpt}</p>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="post-grid">
            {featuredPosts.slice(1).map((post) => (
              <div key={post.id} className="posts__item">
                <div className="posts__thumb">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <div className="posts__inner">
                  <div className="posts__cat">
                    <span className={`label ${post.categoryClass}`}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="posts__title">
                    <Link href={`/post/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <span className="posts__date">{post.date}</span>
                  <p className="posts__excerpt">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          {/* About Widget */}
          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card__header">
              <h5 className="posts__title" style={{ marginBottom: '0' }}>Sobre os Green Owls</h5>
            </div>
            <div className="card__content">
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Image
                  src="/images/green-owls.png"
                  alt="Green Owls Logo"
                  width={120}
                  height={120}
                  style={{ width: '120px', height: 'auto' }}
                />
              </div>
              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Somos uma equipe de eSports da Universidade de Brasília, dedicada à excelência 
                competitiva e ao desenvolvimento de talentos no cenário dos jogos eletrônicos. 
                Nossa missão é representar a UnB com orgulho e conquistar vitórias importantes.
              </p>
              <Link href="/sobre" className="btn btn-primary-inverse btn-sm">
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* Upcoming Matches Widget */}
          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card__header">
              <h5 className="posts__title" style={{ marginBottom: '0' }}>Próximas Partidas</h5>
            </div>
            <div className="card__content">
              {upcomingMatches.map((match) => (
                <div key={match.id} style={{ 
                  padding: '15px', 
                  marginBottom: '15px', 
                  backgroundColor: '#362b45', 
                  borderRadius: '6px',
                  border: '1px solid #4b3b60'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Image
                        src={match.team1.logo}
                        alt={match.team1.name}
                        width={30}
                        height={30}
                        style={{ borderRadius: '4px' }}
                      />
                      <span style={{ fontSize: '12px', fontWeight: '700' }}>{match.team1.name}</span>
                    </div>
                    <span style={{ 
                      color: '#00ff5b', 
                      fontFamily: 'Roboto Condensed', 
                      fontWeight: '700',
                      fontSize: '14px'
                    }}>VS</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700' }}>{match.team2.name}</span>
                      <Image
                        src={match.team2.logo}
                        alt={match.team2.name}
                        width={30}
                        height={30}
                        style={{ borderRadius: '4px' }}
                      />
                    </div>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    fontSize: '11px',
                    color: '#999'
                  }}>
                    <span>{match.date} - {match.time}</span>
                    <span>{match.tournament}</span>
                  </div>
                </div>
              ))}
              <Link href="/partidas" className="btn btn-default btn-sm" style={{ width: '100%', textAlign: 'center' }}>
                Ver Todas as Partidas
              </Link>
            </div>
          </div>

          {/* Stats Widget */}
          <div className="card" style={{ marginBottom: '30px' }}>
            <div className="card__header">
              <h5 className="posts__title" style={{ marginBottom: '0' }}>Estatísticas da Equipe</h5>
            </div>
            <div className="card__content">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#362b45', borderRadius: '6px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#00ff5b', marginBottom: '5px' }}>47</div>
                  <div style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>Vitórias</div>
                </div>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#362b45', borderRadius: '6px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#00ff5b', marginBottom: '5px' }}>24</div>
                  <div style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>Membros</div>
                </div>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#362b45', borderRadius: '6px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#00ff5b', marginBottom: '5px' }}>12</div>
                  <div style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>Torneios</div>
                </div>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#362b45', borderRadius: '6px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#00ff5b', marginBottom: '5px' }}>3</div>
                  <div style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>Anos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Widget */}
          <div className="card">
            <div className="card__header">
              <h5 className="posts__title" style={{ marginBottom: '0' }}>Siga-nos</h5>
            </div>
            <div className="card__content">
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <Link 
                  href="#" 
                  className="social-links__link"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#362b45',
                    border: '1px solid #4b3b60',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Discord
                </Link>
                <Link 
                  href="#" 
                  className="social-links__link"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#362b45',
                    border: '1px solid #4b3b60',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  X
                </Link>
                <Link 
                  href="#" 
                  className="social-links__link"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#362b45',
                    border: '1px solid #4b3b60',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Twitch
                </Link>
                <Link 
                  href="#" 
                  className="social-links__link"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#362b45',
                    border: '1px solid #4b3b60',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  IG
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
