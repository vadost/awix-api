FROM node:latest

WORKDIR /dock

COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build

EXPOSE 80
CMD npm run sync && npm run migrate && npm start
