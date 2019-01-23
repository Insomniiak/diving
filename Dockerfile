FROM node:10

WORKDIR /usr/src

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install -g knex
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "nodemon", "./src/index.js" ]
