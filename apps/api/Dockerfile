# Etapa única pro app Express
FROM node:20

WORKDIR /app

# Copia tudo (ou só apps/api, se preferir otimizar)
COPY . .

WORKDIR /app/apps/api

RUN yarn install --frozen-lockfile

EXPOSE 4000

CMD ["yarn", "start"]
