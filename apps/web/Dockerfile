# Etapa 1: Build monorepo + build web
FROM node:20 AS builder

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN npx turbo run build --filter=web

# Etapa 2: Imagem final para rodar o app web
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/apps/web/node_modules ./node_modules
COPY --from=builder /app/apps/web/package.json ./
COPY --from=builder /app/apps/web/dist ./dist

EXPOSE 3000

CMD ["yarn", "start"]
