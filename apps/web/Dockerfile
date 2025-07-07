# Etapa 1: Build com Turbo
FROM node:20 AS builder

WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile

RUN npx turbo run build --filter=web...

# Etapa 2: Serve a build
FROM node:20-slim AS runner

WORKDIR /app

COPY --from=builder /app/apps/web/dist ./dist

EXPOSE 3000

CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
