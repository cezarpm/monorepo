# Etapa 1: Build monorepo + build blog
FROM node:20 AS builder

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN npx turbo run build --filter=blog

# Etapa 2: Imagem final para rodar o app blog (Node 20 Bullseye - ambiente completo)
FROM node:20-bullseye

RUN apt-get update && apt-get install -y xsel && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar dependências e build da etapa anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/blog/package.json ./
COPY --from=builder /app/apps/blog/dist ./dist

EXPOSE 4000

CMD ["npx", "serve", "-s", "dist", "-l", "4000","--no-clipboard"]
