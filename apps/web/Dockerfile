# Etapa 1: Build monorepo + build web
FROM node:20 AS builder

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN npx turbo run build --filter=web

# Etapa 2: Imagem final para rodar o app web
FROM node:18-alpine

WORKDIR /app

# Copia build, node_modules e package.json só do pacote web
COPY --from=builder /app/packages/web/dist ./dist
COPY --from=builder /app/packages/web/node_modules ./node_modules
COPY --from=builder /app/packages/web/package.json ./

EXPOSE 3000

CMD ["yarn", "start"]
