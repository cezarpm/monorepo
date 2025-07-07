# Etapa 1: Build com Turbo
FROM node:20 AS builder

WORKDIR /app

# Copia só o que é necessário para instalar dependências e buildar
COPY package.json yarn.lock turbo.json ./
COPY apps ./apps
COPY packages ./packages

# Instala dependências sem dev (opcional)
RUN yarn install --frozen-lockfile

# Build do app específico (ajuste o nome conforme o seu app)
RUN npx turbo run build --filter=web...

# Etapa 2: Imagem leve para servir os estáticos
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# Instala um servidor estático (como 'serve')
RUN yarn global add serve

# Copia apenas os arquivos do build do Vite
COPY --from=builder /app/apps/web/dist ./dist

EXPOSE 3000

# Serve o app Vite na porta 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
