FROM node:16

ENV DB_USER twe
ENV DB_PASS twe
ENV DB_HOST db
ENV DB_PORT 3306
ENV DB_NAME twe

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only-production
COPY . .

EXPOSE 8080


CMD ["node", "server.js"]