export interface User {
  id: string
  nome: string
  email: string
  funcao: 'Administrador' | 'Público' | 'Comunicação' | 'Player' | 'Estafe' | 'Gestão' | 'Vendas'
  dataCriacao: Date
}

export interface PerfilPlayer {
  id: string
  usuarioId: string
  nickname: string
  bio?: string
  fotoUrl?: string
  socialTwitter?: string
  socialTwitch?: string
  usuario: User
}

export interface Time {
  id: string
  nome: string
  modalidade: string
  logoUrl?: string
  responsavelId: string
  dataCriacao: Date
  responsavel: User
  membros: MembroTime[]
}

export interface MembroTime {
  timeId: string
  playerUsuarioId: string
  isCapitao: boolean
  dataEntrada: Date
  time: Time
  player: User
}

export interface Noticia {
  id: string
  titulo: string
  subtitulo?: string
  conteudo: string
  autorId: string
  categoria: string
  status: 'Rascunho' | 'Publicado'
  dataPublicacao: Date
  autor: User
  comentarios: Comentario[]
}

export interface Comentario {
  id: string
  noticiaId: string
  autorId: string
  conteudo: string
  dataPublicacao: Date
  noticia: Noticia
  autor: User
}

export interface Produto {
  id: string
  nome: string
  descricao: string
  preco: number
  estoque: number
  categoria: string
  criadoPorId: string
  criadoPor: User
}

export interface Pedido {
  id: string
  clienteId: string
  valorTotal: number
  status: 'Processando' | 'Pagamento Aprovado' | 'Enviado' | 'Entregue' | 'Cancelado'
  dataPedido: Date
  cliente: User
  itens: ItemPedido[]
}

export interface ItemPedido {
  pedidoId: string
  produtoId: string
  quantidade: number
  precoUnitario: number
  pedido: Pedido
  produto: Produto
}

export interface Competicao {
  id: string
  nome: string
  dataInicio: Date
  dataFim: Date
  partidas: Partida[]
}

export interface Partida {
  id: string
  competicaoId: string
  timeAId: string
  timeBId: string
  resultadoTimeA?: number
  resultadoTimeB?: number
  dataHora: Date
  linkVod?: string
  competicao: Competicao
  timeA: Time
  timeB: Time
}

export interface AgendaEvento {
  id: string
  timeId: string
  titulo: string
  descricao: string
  dataHoraInicio: Date
  dataHoraFim: Date
  tipoEvento: 'Treino' | 'Partida' | 'Reunião'
  time: Time
}
