# Etapa 1: Build monorepo + build web
FROM node:20 AS builder

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN npx turbo run build --filter=web

# Etapa 2: Imagem final para rodar o app web
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web/package.json ./
COPY --from=builder /app/apps/web/dist ./dist


# Depois do COPY
RUN echo "Conteúdo de /app" && ls -la /app
RUN echo "Conteúdo de /app/dist" && ls -la /app/dist
RUN echo "Conteúdo de /app/node_modules" && ls -la /app/node_modules


EXPOSE 3000

CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
