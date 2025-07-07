# Etapa 1: Build com Turbo
FROM node:20 AS builder

WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile

RUN npx turbo run build --filter=web...

# Etapa 2: Serve a build
FROM node:20-slim AS runner

WORKDIR /app

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["yarn", "start"]