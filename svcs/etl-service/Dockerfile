FROM debian:latest

RUN apt-get update && apt-get install -y openssl
RUN useradd -m node

USER node
WORKDIR /home/node/app

RUN openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
      -keyout localhost-privkey.pem -out localhost-cert.pem

FROM node:19-alpine3.17

RUN npm install -g nodemon

WORKDIR /home/node/app
USER node

COPY --from=0 /home/node/app/localhost-cert.pem .
COPY --from=0 /home/node/app/localhost-privkey.pem .

# TODO: use either npm or yarn, not both
COPY .yarnrc.yml .
COPY --chown=node:node yarn.lock .
COPY package.json .
RUN npm install

ENTRYPOINT ["nodemon", "src/index.mjs"]
