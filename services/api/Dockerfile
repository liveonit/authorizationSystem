FROM node:16-alpine

# Create app directory
RUN mkdir -p /api

WORKDIR /api

COPY package* .

RUN npm install

COPY ./ /api

CMD [ "npm", "run", "development" ]
