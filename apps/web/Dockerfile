# Etapa 1: Build com Turbo
FROM node:20 AS builder

WORKDIR /app

# Copy root package.json and lockfile
COPY package.json ./
COPY package-lock.json ./
 
# Copy the api package.json
COPY apps/web/package.json ./apps/web/package.json

# Instala dependências sem dev (opcional)
RUN yarn

COPY . .

EXPOSE 3000

# Serve o app Vite na porta 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
