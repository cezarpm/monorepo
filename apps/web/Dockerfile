FROM node:20 AS builder

WORKDIR /app

# Copia só o package.json e yarn.lock do app web
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Copia tudo dentro de apps/web (contexto)
COPY . .

RUN yarn build

# --- Stage final ---
FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist

RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
