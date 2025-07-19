import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando o seed do banco de dados...')

  // Criar usuário administrador
  const adminPassword = await bcrypt.hash('admin123', 12)
  const admin = await prisma.usuario.upsert({
    where: { email: 'admin@unbgreenowls.com' },
    update: {},
    create: {
      nome: 'Administrador',
      email: 'admin@unbgreenowls.com',
      senhaHash: adminPassword,
      funcao: 'ADMINISTRADOR',
    },
  })

  // Criar usuário de comunicação
  const comunicacaoPassword = await bcrypt.hash('comunicacao123', 12)
  const comunicacao = await prisma.usuario.upsert({
    where: { email: 'comunicacao@unbgreenowls.com' },
    update: {},
    create: {
      nome: 'Equipe de Comunicação',
      email: 'comunicacao@unbgreenowls.com',
      senhaHash: comunicacaoPassword,
      funcao: 'COMUNICACAO',
    },
  })

  // Criar times
  const timeLol = await prisma.time.upsert({
    where: { id: 'time-lol-1' },
    update: {},
    create: {
      id: 'time-lol-1',
      nome: 'Green Owls LoL',
      modalidade: 'League of Legends',
      responsavelId: admin.id,
    },
  })

  const timeValorant = await prisma.time.upsert({
    where: { id: 'time-valorant-1' },
    update: {},
    create: {
      id: 'time-valorant-1',
      nome: 'Green Owls Valorant',
      modalidade: 'Valorant',
      responsavelId: admin.id,
    },
  })

  const timeCs2 = await prisma.time.upsert({
    where: { id: 'time-cs2-1' },
    update: {},
    create: {
      id: 'time-cs2-1',
      nome: 'Green Owls CS2',
      modalidade: 'Counter-Strike 2',
      responsavelId: admin.id,
    },
  })

  // Criar players de exemplo
  const playerPassword = await bcrypt.hash('player123', 12)
  
  const player1 = await prisma.usuario.upsert({
    where: { email: 'player1@unbgreenowls.com' },
    update: {},
    create: {
      nome: 'João Silva',
      email: 'player1@unbgreenowls.com',
      senhaHash: playerPassword,
      funcao: 'PLAYER',
    },
  })

  // Criar perfil do player
  await prisma.perfilPlayer.upsert({
    where: { usuarioId: player1.id },
    update: {},
    create: {
      usuarioId: player1.id,
      nickname: 'GreenOwl1',
      bio: 'ADC principal do time de League of Legends. Jogando há 5 anos no cenário competitivo.',
      socialTwitch: 'twitch.tv/greenowl1',
      socialTwitter: 'twitter.com/greenowl1',
    },
  })

  // Adicionar player ao time
  await prisma.membroTime.upsert({
    where: {
      timeId_playerUsuarioId: {
        timeId: timeLol.id,
        playerUsuarioId: player1.id,
      },
    },
    update: {},
    create: {
      timeId: timeLol.id,
      playerUsuarioId: player1.id,
      isCapitao: true,
    },
  })

  // Criar notícias de exemplo
  await prisma.noticia.upsert({
    where: { id: 'noticia-1' },
    update: {},
    create: {
      id: 'noticia-1',
      titulo: 'Green Owls LoL conquista vaga para playoffs',
      subtitulo: 'Time demonstra excelente performance na fase de grupos',
      conteudo: `
        <p>O time de League of Legends dos Green Owls conquistou uma importante vaga para os playoffs do campeonato universitário após uma série de vitórias consistentes na fase de grupos.</p>
        
        <p>Com uma performance impecável, o time demonstrou grande entrosamento e estratégia, derrotando adversários tradicionais e se consolidando como uma das principais forças do cenário competitivo universitário.</p>
        
        <p>"Estamos muito felizes com o resultado. Todo o trabalho duro dos treinos está sendo recompensado", declarou o capitão da equipe.</p>
        
        <p>Os playoffs começam na próxima semana e prometem jogos emocionantes. A torcida Green Owls já pode se preparar para apoiar o time nesta fase decisiva!</p>
      `,
      autorId: comunicacao.id,
      categoria: 'League of Legends',
      status: 'PUBLICADO',
    },
  })

  await prisma.noticia.upsert({
    where: { id: 'noticia-2' },
    update: {},
    create: {
      id: 'noticia-2',
      titulo: 'Novo roster de Valorant é anunciado',
      subtitulo: 'Conheça os novos talentos que integram nossa equipe',
      conteudo: `
        <p>Os Green Owls têm o prazer de anunciar o novo roster de Valorant para a temporada 2025. Após um processo seletivo rigoroso, cinco talentosos jogadores foram escolhidos para representar as cores da universidade.</p>
        
        <p>O novo time traz uma mistura equilibrada de experiência e juventude, com jogadores que já se destacaram em campeonatos regionais e outros que estão começando sua jornada no cenário competitivo.</p>
        
        <p>As expectativas são altas para esta nova formação, que já demonstrou grande química nos treinos iniciais.</p>
      `,
      autorId: comunicacao.id,
      categoria: 'Valorant',
      status: 'PUBLICADO',
    },
  })

  // Criar produtos de exemplo
  await prisma.produto.upsert({
    where: { id: 'produto-1' },
    update: {},
    create: {
      id: 'produto-1',
      nome: 'Camiseta Green Owls 2025',
      descricao: 'Camiseta oficial dos Green Owls, feita com tecido premium e design exclusivo. Disponível em diversos tamanhos.',
      preco: 89.90,
      estoque: 50,
      categoria: 'Vestuário',
      criadoPorId: admin.id,
    },
  })

  await prisma.produto.upsert({
    where: { id: 'produto-2' },
    update: {},
    create: {
      id: 'produto-2',
      nome: 'Caneca Gamer Green Owls',
      descricao: 'Caneca perfeita para os momentos de gaming. Capacidade de 350ml com logo dos Green Owls.',
      preco: 34.90,
      estoque: 30,
      categoria: 'Acessórios',
      criadoPorId: admin.id,
    },
  })

  await prisma.produto.upsert({
    where: { id: 'produto-3' },
    update: {},
    create: {
      id: 'produto-3',
      nome: 'Moletom Oficial Green Owls',
      descricao: 'Moletom oficial com capuz, ideal para os dias frios. Material de alta qualidade e bordado exclusivo.',
      preco: 149.90,
      estoque: 25,
      categoria: 'Vestuário',
      criadoPorId: admin.id,
    },
  })

  // Criar competição de exemplo
  const competicao = await prisma.competicao.upsert({
    where: { id: 'competicao-1' },
    update: {},
    create: {
      id: 'competicao-1',
      nome: 'CBLOL Academy 2025',
      dataInicio: new Date('2025-02-01'),
      dataFim: new Date('2025-05-15'),
    },
  })

  // Criar partidas de exemplo
  await prisma.partida.upsert({
    where: { id: 'partida-1' },
    update: {},
    create: {
      id: 'partida-1',
      competicaoId: competicao.id,
      timeAId: timeLol.id,
      timeBId: timeValorant.id, // Exemplo, na prática seria outro time de LoL
      dataHora: new Date('2025-01-20T19:00:00'),
    },
  })

  console.log('✅ Seed concluído com sucesso!')
  console.log('📧 Admin: admin@unbgreenowls.com (senha: admin123)')
  console.log('📧 Comunicação: comunicacao@unbgreenowls.com (senha: comunicacao123)')
  console.log('📧 Player: player1@unbgreenowls.com (senha: player123)')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
