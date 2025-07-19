# 🦉 UnB Green Owls - Esports Club Website

Uma aplicação web moderna e completa para o clube de esportes eletrônicos **UnB Green Owls**, desenvolvida com as melhores tecnologias do mercado.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## 🎯 Sobre o Projeto

O site dos **UnB Green Owls** é uma plataforma completa que oferece:

### 🏆 Funcionalidades Principais

#### **Área Pública**
- 🏠 **Home Page** com hero section dinâmica
- 📰 **Sistema de Notícias** com categorias e comentários
- 👥 **Perfis de Times** por modalidade (LoL, Valorant, CS2, etc.)
- 🏆 **Sistema de Competições** com resultados e agenda
- 🛒 **E-commerce** para produtos oficiais
- 📸 **Galeria de Mídia** com fotos e vídeos

#### **Sistema de Usuários**
- 🔐 **Autenticação** completa (login/cadastro)
- 👤 **Perfis personalizados** para cada tipo de usuário
- 💬 **Sistema de comentários** nas notícias
- 🛍️ **Carrinho de compras** e histórico de pedidos

#### **Painel Administrativo**
- 🎮 **Gestão de Times** e players
- 📝 **Editor de notícias** com WYSIWYG
- 🏪 **Gestão de produtos** e pedidos
- 📊 **Dashboard** com estatísticas
- ⚡ **Moderação** de conteúdo

### 👥 Tipos de Usuário

| Função | Permissões |
|--------|------------|
| **Administrador** | Acesso total ao sistema |
| **Gestão** | Gerencia times, competições e players |
| **Estafe** | Gerencia times específicos e agenda |
| **Comunicação** | Cria/edita notícias e galeria |
| **Vendas** | Gerencia produtos e pedidos |
| **Player** | Perfil de jogador, agenda do time |
| **Público** | Navegação, comentários, compras |

## 🛠️ Stack Tecnológica

### **Frontend**
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas
- **React Hook Form** - Gerenciamento de formulários
- **Zustand** - Estado global
- **Radix UI** - Componentes acessíveis

### **Backend**
- **Next.js API Routes** - Backend integrado
- **Prisma ORM** - Modelagem e queries do banco
- **PostgreSQL** - Banco de dados relacional
- **NextAuth.js** - Autenticação segura
- **Bcrypt** - Hash de senhas

### **UI/UX**
- **Design System** customizado
- **Tema gaming** com paleta verde/esmeralda
- **Responsivo** para todos os dispositivos
- **Acessibilidade** (WCAG 2.1)
- **Performance otimizada**

## 🚀 Instalação e Configuração

### **Pré-requisitos**
- Node.js 18+ 
- PostgreSQL 14+
- Git

### **Passo a Passo**

1. **Clone o repositório**
```bash
git clone https://github.com/omarquesjr/UnB-GreenOwls.git
cd UnB-GreenOwls
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure o banco de dados**
```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Configure as variáveis no .env.local
DATABASE_URL="postgresql://username:password@localhost:5432/unb_green_owls"
NEXTAUTH_SECRET="seu-secret-super-seguro"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Execute as migrações do Prisma**
```bash
npx prisma migrate dev
npx prisma generate
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

6. **Acesse a aplicação**
```
http://localhost:3000
```

## 📊 Modelagem do Banco de Dados

### **Principais Entidades**

- **usuarios** - Dados base de todos os usuários
- **perfis_players** - Informações específicas dos jogadores
- **times** - Equipes por modalidade
- **membros_time** - Relacionamento N:N entre times e players
- **noticias** - Sistema de blog/notícias
- **comentarios** - Comentários nas notícias
- **produtos** - Catálogo da loja
- **pedidos** - Sistema de e-commerce
- **competicoes** e **partidas** - Sistema de campeonatos

### **Relacionamentos Principais**
- Um usuário pode ter um perfil de player
- Um time tem muitos membros (players)
- Uma notícia tem muitos comentários
- Um pedido tem muitos itens

## 🎨 Design e Layout

O design foi inspirado no template moderno de esports, com:

- **Paleta de cores** verde/esmeralda para identidade visual
- **Tipografia** Orbitron (display) + Inter (texto)
- **Gradientes** e efeitos neon para atmosfera gaming
- **Cards glassmorphism** para conteúdo
- **Animações** sutis e responsivas
- **Layout** flexível e mobile-first

## 📱 Páginas e Rotas

### **Público**
- `/` - Home page
- `/noticias` - Lista de notícias
- `/noticias/[slug]` - Detalhe da notícia
- `/times` - Lista de times
- `/times/[nome]` - Detalhe do time
- `/players/[nickname]` - Perfil do player
- `/competicoes` - Competições
- `/loja` - E-commerce
- `/loja/produto/[id]` - Detalhe do produto

### **Autenticado**
- `/login` e `/cadastro` - Autenticação
- `/minha-conta/perfil` - Perfil do usuário
- `/minha-conta/pedidos` - Histórico de compras
- `/carrinho` - Carrinho de compras
- `/checkout` - Finalização de compra

### **Administrativo**
- `/painel` - Dashboard principal
- `/painel/usuarios` - Gestão de usuários
- `/painel/times` - Gestão de times
- `/painel/noticias` - Gestão de conteúdo
- `/painel/produtos` - Gestão da loja
- `/painel/pedidos` - Gestão de vendas

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Linting do código

# Banco de dados
npm run db:push      # Aplica mudanças do schema
npm run db:studio    # Interface visual do Prisma
npm run db:generate  # Gera client do Prisma
npm run db:migrate   # Executa migrações
npm run db:seed      # Popula dados iniciais
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Omar Marques Jr**
- GitHub: [@omarquesjr](https://github.com/omarquesjr)
- LinkedIn: [Omar Marques Jr](https://linkedin.com/in/omarquesjr)

## 🎮 UnB Green Owls

**Universidade de Brasília - Clube de Esports**
- Website: [unbgreenowls.com.br](https://unbgreenowls.com.br)
- Instagram: [@unbgreenowls](https://instagram.com/unbgreenowls)
- Twitter: [@unbgreenowls](https://twitter.com/unbgreenowls)

---

⭐ **Se este projeto te ajudou, deixe uma estrela!**
