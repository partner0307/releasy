FROM node:16-alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "dev"]
