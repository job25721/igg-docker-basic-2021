FROM node:14-alpine3.12
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY server.js ./
CMD ["yarn","start"]