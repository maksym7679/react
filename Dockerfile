FROM node:10.16.3-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install

COPY . /usr/src/app

CMD [ "yarn", "run", "web" ]