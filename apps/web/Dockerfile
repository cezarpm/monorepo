# Etapa 1: Instala dependências e builda com Turbo
FROM node:20 AS builder

WORKDIR /app

# Copia tudo
COPY . .

# Faz build apenas do app frontend
RUN npx turbo run build --filter=web...

# Etapa 2: Serve o frontend com uma imagem leve
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copia apenas o app web buildado
COPY --from=builder /app/apps/web/.next .next
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/apps/web/package.json ./package.json
COPY --from=builder /app/apps/web/next.config.js ./next.config.js

RUN yarn install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
