# Etapa 1: Build com Node 20 completo
FROM node:20 AS builder

WORKDIR /app

# Copia só os arquivos necessários para instalar as dependências
COPY package.json yarn.lock ./

# Instala dependências sem alterar yarn.lock
RUN yarn install --frozen-lockfile

# Copia todo o código fonte (assumindo que seu Vite está em apps/web)
COPY . .

# Executa o build do Vite
RUN yarn build

# Etapa 2: Imagem final enxuta com node:20-slim
FROM node:20-slim

WORKDIR /app

# Copia a build gerada pelo builder para o runtime
COPY --from=builder /app/dist ./dist

# Instala serve globalmente para servir o build estático
RUN yarn global add serve

# Expondo a porta padrão do serve
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["serve", "-s", "dist", "-l", "3000"]
