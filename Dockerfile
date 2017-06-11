FROM node:latest

WORKDIR /dock

COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build
RUN npm run sync
RUN npm run migrate

EXPOSE 80
CMD ["npm", "start"]
