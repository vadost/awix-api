FROM node:latest

WORKDIR /dock

COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build

EXPOSE 3000
CMD sleep 20 && npm run sync && npm run seed && npm start
