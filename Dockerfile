FROM node:10

COPY /src /usr/src/

WORKDIR /usr/src

RUN npm install express --save

RUN npm install

CMD node index.js
