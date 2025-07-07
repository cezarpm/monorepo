# Etapa 1: Build com Turbo
FROM node:20 AS builder

WORKDIR /app

# Copia os arquivos de configuração essenciais (package.json, yarn.lock, turbo.json)
COPY package.json yarn.lock turbo.json ./

# Copia as pastas do monorepo necessárias
COPY apps ./apps
COPY packages ./packages

# Instala dependências com yarn
RUN yarn install --frozen-lockfile

# Build do app web dentro do monorepo
RUN npx turbo run build --filter=web...

# Etapa 2: Imagem leve para servir arquivos estáticos
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# Instala o servidor estático 'serve'
RUN yarn global add serve

# Copia só o build do app web para a imagem final
COPY --from=builder /app/apps/web/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
