# Etapa 1: Build
FROM node:20 AS builder

WORKDIR /app

# Instala dependências
RUN yarn install --frozen-lockfile

# Executa o build do Vite
RUN yarn build

# Etapa 2: Serve app com imagem leve
FROM node:20-slim AS runner

WORKDIR /app

# Copia só a build gerada
COPY --from=builder /app/dist ./dist

# Instala o 'serve' para rodar o app
RUN yarn global add serve

EXPOSE 3000

# Comando para servir os arquivos estáticos
CMD ["serve", "-s", "dist", "-l", "3000"]
