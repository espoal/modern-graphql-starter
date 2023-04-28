FROM node:19-alpine3.17

RUN npm install -g nodemon

WORKDIR /home/node/app
RUN chown -R node:node /home/node
USER node

COPY .yarnrc.yml .
COPY --chown=node:node yarn.lock .
COPY package.json .
RUN yarn install

ENTRYPOINT ["nodemon", "src/index.mjs"]
