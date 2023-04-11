FROM --platform=linux/amd64 node:18-alpine As development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "test" ]