FROM node:latest

COPY . .

RUN yarn install && yarn build


FROM node:alpine

EXPOSE 3000/tcp

ARG BASE_URL=http://localhost:8080
ARG BROWSER_BASE_URL=http://localhost:8080
ARG WEBSOCKET_BASE_URL=ws://localhost:8080

ENV BASE_URL=$BASE_URL
ENV BROWSER_BASE_URL=$BROWSER_BASE_URL
ENV WEBSOCKET_BASE_URL=$WEBSOCKET_BASE_URL
ENV NUXT_HOST=0.0.0.0

WORKDIR /root/

COPY --from=0 .nuxt/ /root/.nuxt
COPY --from=0 static/ /root/static
COPY --from=0 package.json yarn.lock nuxt.config.js /root/

RUN yarn install --production

CMD ["yarn", "start"]
