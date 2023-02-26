FROM node:16

WORKDIR /app

EXPOSE 8000

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run start

