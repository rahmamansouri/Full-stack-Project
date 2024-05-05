FROM --platform=linux/amd64 node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN 

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
