FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM node:22-alpine
COPY --from=build /app/.output/ .
EXPOSE ${NUXT_PORT}
ARG NUXT_API_URL
ENV NUXT_API_URL=${NUXT_API_URL}
CMD ["node", "server/index.mjs"]

