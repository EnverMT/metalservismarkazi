FROM node:22-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build

FROM node:22-alpine
COPY --from=build /app/.output/ .
EXPOSE 3000
CMD ["node", "server/index.mjs"]

