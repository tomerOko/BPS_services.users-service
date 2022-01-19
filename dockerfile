FROM node:16

RUN npm i -g nodemon@2.0.15 typescript@4.5.4 ts-jest@27.1.2

COPY dist/app/src /app

WORKDIR /app

ENTRYPOINT ["node","index.js"]

