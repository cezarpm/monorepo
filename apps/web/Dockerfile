FROM node:20 AS builder

WORKDIR /app

COPY package.json yarn.lock turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN yarn install --frozen-lockfile

WORKDIR /app/apps/web
RUN yarn build

FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/apps/web/dist ./dist

RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
