# 🪟 Guia de Instalação - Windows

Este guia específico ajudará você a configurar o projeto UnB Green Owls no Windows.

## 📋 Pré-requisitos

### 1. Instalar Node.js
- Baixe a versão LTS do Node.js em: https://nodejs.org/
- Execute o instalador (.msi) como administrador
- Marque a opção "Add to PATH" durante a instalação
- Reinicie o terminal/VS Code após a instalação

### 2. Instalar Git
- Baixe em: https://git-scm.com/download/win
- Use as configurações padrão do instalador
- Escolha "Git from the command line and also from 3rd-party software"

### 3. Instalar PostgreSQL
- Baixe em: https://www.postgresql.org/download/windows/
- Durante a instalação, anote a senha do usuário `postgres`
- Porta padrão: 5432
- Criar um banco chamado `unb_green_owls`

## 🚀 Configuração do Projeto

### 1. Clone o repositório
```cmd
git clone https://github.com/omarquesjr/UnB-GreenOwls.git
cd UnB-GreenOwls
```

### 2. Instale as dependências
```cmd
npm install
```

### 3. Configure o banco de dados

Copie o arquivo `.env.example` para `.env.local`:
```cmd
copy .env.example .env.local
```

Edite o arquivo `.env.local` e configure:
```env
DATABASE_URL="postgresql://postgres:SUA_SENHA@localhost:5432/unb_green_owls"
NEXTAUTH_SECRET="seu-secret-super-seguro-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Configure o Prisma
```cmd
npx prisma generate
npx prisma db push
npx prisma db seed
```

### 5. Inicie o projeto
```cmd
npm run dev
```

O site estará disponível em: http://localhost:3000

## 🔧 Comandos Úteis

```cmd
# Ver logs do banco
npx prisma studio

# Resetar o banco
npx prisma migrate reset

# Build para produção
npm run build

# Verificar lint
npm run lint
```

## ❗ Resolução de Problemas Comuns

### Node.js não é reconhecido
- Reinicie o terminal/VS Code
- Verifique se o Node.js está no PATH do sistema
- Execute: `node --version` para confirmar

### Erro de conexão com PostgreSQL
- Verifique se o serviço PostgreSQL está rodando
- Abra "Serviços" do Windows e procure por "postgresql"
- Confirme usuário, senha e porta no arquivo `.env.local`

### Erro de permissão
- Execute o terminal como administrador
- Ou use PowerShell em vez do CMD

### Porta 3000 já está em uso
```cmd
# Use uma porta diferente
npm run dev -- -p 3001
```

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do terminal
2. Consulte a documentação do Next.js
3. Abra uma issue no GitHub

---

🎮 **Happy Coding, Green Owls!**
