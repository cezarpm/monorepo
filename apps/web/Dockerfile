# Etapa 1: Build
FROM node:20 AS builder

WORKDIR /app

# Copia os arquivos do app (ajuste o path se estiver em um monorepo)
COPY . .

# Instala dependências
RUN yarn install --frozen-lockfile

# Builda com Vite
RUN yarn build

# Etapa 2: Runner
FROM node:20-slim AS runner

WORKDIR /app

# Copia só a build gerada
COPY --from=builder /app/dist ./dist

# Instala o 'serve'
RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
