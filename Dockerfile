FROM node:18-alpine3.14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "start"]