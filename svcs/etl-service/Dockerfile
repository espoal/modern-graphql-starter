FROM debian:latest

RUN apt-get update && apt-get install -y openssl
RUN useradd -m node

USER node
WORKDIR /home/node/app

RUN openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
      -keyout localhost-privkey.pem -out localhost-cert.pem

FROM node:19-alpine3.17

RUN corepack enable
RUN corepack prepare yarn@canary --activate

WORKDIR /home/node/app
RUN chown -R node:node /home/node
USER node

COPY --from=0 /home/node/app/localhost-cert.pem .
COPY --from=0 /home/node/app/localhost-privkey.pem .

COPY .yarnrc.yml yarn.lock package.json ./
RUN yarn install --immutable

