# Etapa 1: Build
FROM node:20 AS builder

WORKDIR /app

# Copia os arquivos de dependência
COPY package.json yarn.lock ./

# Instala dependências
RUN yarn install --frozen-lockfile

# Copia o restante do código
COPY . .

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
