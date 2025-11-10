FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM node:22-alpine
COPY --from=build /app/.output/ .
EXPOSE 3000
CMD ["node", "server/index.mjs"]

