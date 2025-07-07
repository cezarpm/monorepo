# Etapa 1: Build com Turbo
FROM node:20 AS builder

# Sobe tudo para o /app (monorepo completo)
WORKDIR /app
COPY . .

# Instala dependências
RUN yarn install --frozen-lockfile

# Builda apenas o app web usando Turbo
RUN yarn dlx turbo run build --filter=web...

# Etapa 2: Serve a build
FROM node:20-slim AS runner

WORKDIR /app

# Copia a build do app
COPY --from=builder /app/apps/web/dist ./dist

# Instala servidor estático
RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
