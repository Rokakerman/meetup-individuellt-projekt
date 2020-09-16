FROM node:Its-apline 

RUN npm install -g http-serve

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

EXPOSE 9000
CMD [ "http-server", "dist" ]